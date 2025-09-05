import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = ({ onUploadSuccess, onUploadError }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      if (onUploadError) onUploadError('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    setUploading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:3003/api/uploads/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      
      if (onUploadSuccess) onUploadSuccess(res.data);
    } catch (err) {
      if (onUploadError) onUploadError('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="text-xs text-gray-500">Click to upload</p>
            </div>
          )}
          <input 
            type="file" 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileChange}
          />
        </label>
        <div>
          {selectedFile && (
            <div>
              <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
              <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(2)} KB</p>
            </div>
          )}
        </div>
      </div>
      
      <button
        type="button"
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  );
};

export default UploadImage;