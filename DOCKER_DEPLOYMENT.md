# Docker Deployment Guide for Chatbot Application

This guide will help you deploy your chatbot application using Docker on Render.

## Prerequisites

1. Docker installed on your local machine
2. Docker Hub account (optional, for pushing images)
3. Render.com account

## Local Development with Docker

### 1. Build and Run Locally

To build and run your application locally using Docker:

```bash
# Navigate to the project root
cd chatbot

# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up --build -d
```

### 2. Run Migrations

After starting the services, you need to run the database migrations:

```bash
# Enter the backend container
docker exec -it chatbot-backend sh

# Run Prisma migrations
npx prisma migrate deploy

# Exit the container
exit
```

### 3. Access the Application

- Frontend: http://localhost
- Backend API: http://localhost:3003

## Deploying to Render with Docker

### Option 1: Using Render's Automatic Docker Build

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" and select "Web Service"
3. Connect your GitHub repository
4. Choose the root directory as `/`
5. Set the following configuration:
   - Name: `chatbot-app`
   - Environment: `Docker`
   - Docker Command: Leave empty (will use Dockerfile)
   - Plan: Choose the free plan to start

### Option 2: Deploy Services Separately

#### Deploy MySQL Database

Since Render doesn't support MySQL directly, you'll need to:
1. Use an external MySQL provider (PlanetScale, Railway, etc.)
2. Or deploy a MySQL container using Render's private service feature

#### Deploy Backend Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" and select "Web Service"
3. Connect your GitHub repository
4. Choose the root directory as `/backend`
5. Set the following configuration:
   - Name: `chatbot-backend`
   - Environment: `Docker`
   - Plan: Choose the free plan to start

#### Deploy Frontend Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" and select "Web Service"
3. Connect your GitHub repository
4. Choose the root directory as `/frontend`
5. Set the following configuration:
   - Name: `chatbot-frontend`
   - Environment: `Docker`
   - Plan: Choose the free plan to start

## Environment Variables

### Backend Environment Variables

Set these in your Render backend service:
```
DATABASE_URL=your_mysql_connection_string
PORT=10000
FACEBOOK_PAGE_ACCESS_TOKEN=your_production_token
FACEBOOK_VERIFY_TOKEN=your_production_verify_token
FACEBOOK_APP_SECRET=your_production_app_secret
```

### Frontend Environment Variables

Set these in your Render frontend service:
```
VITE_API_URL=https://your-backend-service.onrender.com
```

## Custom Domain (Optional)

1. In your Render dashboard, go to your service
2. Click "Settings"
3. Scroll to "Custom Domains"
4. Add your domain
5. Follow the DNS instructions provided

## Monitoring and Logs

1. In your Render dashboard, go to your service
2. Click "Logs" to view real-time logs
3. Set up alerts for error conditions
4. Monitor resource usage in the "Metrics" tab

## Scaling

1. In your Render dashboard, go to your service
2. Click "Settings"
3. Adjust the instance count and plan as needed
4. Consider using Render's auto-scaling features

## Backup and Recovery

1. Regularly backup your database
2. Use Render's built-in backup features if available
3. Test your recovery procedures periodically

## Troubleshooting

### Common Issues

1. **Database Connection Issues**:
   - Check DATABASE_URL environment variable
   - Ensure database is accessible from Render
   - Verify database credentials

2. **Build Failures**:
   - Check Dockerfile syntax
   - Ensure all dependencies are correctly specified
   - Review build logs for specific errors

3. **Runtime Errors**:
   - Check application logs
   - Verify environment variables
   - Ensure proper file permissions

### Debugging Steps

1. Check Render logs for error messages
2. Verify all environment variables are set correctly
3. Test database connectivity from your local machine
4. Ensure your Docker images build successfully locally

## Updating Your Application

1. Make changes to your code
2. Commit and push to your GitHub repository
3. Render will automatically detect changes and redeploy
4. Monitor the deployment process in the Render dashboard

## Cost Optimization

1. Use the free tier for development and testing
2. Monitor resource usage and adjust plans accordingly
3. Consider using Render's scheduled services to save costs
4. Optimize your Docker images to reduce build times