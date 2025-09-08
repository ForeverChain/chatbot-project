const express = require('express');
const busboy = require('busboy');
const cloudinary = require('cloudinary').v2;
const { Readable } = require('stream');
const auth = require('../middleware/auth');

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload image to Cloudinary using busboy instead of multer
router.post('/image', auth, (req, res) => {
  const bb = busboy({ headers: req.headers });
  let uploadResult = null;

  bb.on('file', async (name, file, info) => {
    const { filename, encoding, mimeType } = info;
    
    // Convert the file stream to a buffer
    const chunks = [];
    for await (const chunk of file) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    
    // Create a readable stream from the buffer
    const stream = Readable.from(buffer);
    
    try {
      // Upload to Cloudinary
      uploadResult = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'chatbot-builder',
            public_id: `${Date.now()}-${filename}`,
            resource_type: 'image'
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        stream.pipe(uploadStream);
      });
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      bb.emit('error', error);
    }
  });

  bb.on('close', () => {
    if (!uploadResult) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    res.status(201).json({
      message: 'Image uploaded successfully',
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });
  });

  bb.on('error', (error) => {
    console.error('Busboy error:', error);
    res.status(500).json({ error: 'Error uploading image' });
  });

  req.pipe(bb);
});

module.exports = router;