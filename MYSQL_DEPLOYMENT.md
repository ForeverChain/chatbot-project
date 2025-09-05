# MySQL Deployment Guide for Chatbot Application

This guide will help you deploy your chatbot application with MySQL database.

## Option 1: Using PlanetScale (Recommended)

### 1. Create PlanetScale Account
1. Go to [PlanetScale](https://planetscale.com/)
2. Sign up for a free account
3. Create a new database:
   - Name: `chatbot-db`
   - Region: Choose the one closest to your Render region
   - Plan: Free

### 2. Get Connection Details
1. In your PlanetScale dashboard, select your database
2. Click "Connect"
3. Select "Prisma" from the connection method dropdown
4. Copy the connection string

### 3. Configure Render Environment Variables
In your Render backend service, set:
```
DATABASE_URL=your_planetscale_connection_string
PORT=10000
```

## Option 2: Using Railway MySQL

### 1. Create Railway Account
1. Go to [Railway](https://railway.app/)
2. Sign up for an account
3. Create a new project
4. Add a MySQL database from the service catalog

### 2. Get Connection Details
1. In your Railway dashboard, select your database
2. Go to the "Connect" tab
3. Copy the MySQL connection URL

### 3. Configure Render Environment Variables
In your Render backend service, set:
```
DATABASE_URL=your_railway_mysql_connection_string
PORT=10000
```

## Option 3: Using DigitalOcean MySQL

### 1. Create DigitalOcean Account
1. Go to [DigitalOcean](https://www.digitalocean.com/)
2. Sign up for an account
3. Create a MySQL database cluster

### 2. Configure Database
1. Create a new database
2. Create a database user
3. Note the connection details:
   - Host
   - Port (usually 3306)
   - Username
   - Password
   - Database name

### 3. Configure Render Environment Variables
In your Render backend service, set:
```
DATABASE_URL=mysql://USERNAME:PASSWORD@HOST:3306/DATABASE_NAME
PORT=10000
```

## Running Migrations

After setting up your database and configuring the DATABASE_URL environment variable, you need to run the migrations:

1. Deploy your backend to Render first
2. Once deployed, access the Render console for your service
3. Run the migration command:
   ```bash
   npx prisma migrate deploy
   ```

## Environment Variables Required

Your backend service will need these environment variables:
- `DATABASE_URL`: Your MySQL connection string
- `PORT`: 10000 (Render's default port)
- `FACEBOOK_PAGE_ACCESS_TOKEN`: Your Facebook page access token (optional)
- `FACEBOOK_VERIFY_TOKEN`: Your Facebook verify token (optional)
- `FACEBOOK_APP_SECRET`: Your Facebook app secret (optional)

## Troubleshooting

### Connection Issues
If you're having connection issues:
1. Make sure your database allows connections from Render's IP addresses
2. Check that your connection string is correct
3. Verify that your database credentials are correct

### Migration Issues
If migrations fail:
1. Check that your DATABASE_URL is correctly set
2. Ensure your database is accessible from Render
3. Try running migrations locally first to test

## Security Considerations

1. Never commit database credentials to your repository
2. Use environment variables for all sensitive information
3. Rotate your database credentials regularly
4. Use strong passwords for your database users