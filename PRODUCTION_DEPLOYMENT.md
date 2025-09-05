# Production Deployment Guide

This guide will help you deploy your chatbot application to production on Render.

## Production Environment Setup

### 1. Database Setup

For production, use a reliable MySQL provider:

1. **PlanetScale** (recommended):
   - Create a production branch
   - Enable backups
   - Set up proper access controls

2. **Railway**:
   - Upgrade to a paid plan for better reliability
   - Enable automatic backups

### 2. Environment Variables for Production

Set these in your Render production service:

```
NODE_ENV=production
DATABASE_URL=your_production_mysql_connection_string
PORT=10000
JWT_SECRET=your_secure_jwt_secret
BCRYPT_SALT_ROUNDS=12
FACEBOOK_PAGE_ACCESS_TOKEN=your_production_page_access_token
FACEBOOK_VERIFY_TOKEN=your_production_verify_token
FACEBOOK_APP_SECRET=your_production_app_secret
```

### 3. Security Considerations

1. **Use strong secrets**:
   - Generate secure JWT secrets
   - Use different secrets for different environments

2. **Database security**:
   - Use SSL connections
   - Restrict database access
   - Regular backups

3. **API security**:
   - Implement rate limiting
   - Use proper authentication
   - Validate all inputs

### 4. Performance Optimization

1. **Caching**:
   - Implement Redis for session storage
   - Cache frequently accessed data

2. **Database optimization**:
   - Add proper indexes
   - Monitor slow queries
   - Optimize Prisma queries

3. **Frontend optimization**:
   - Enable compression
   - Optimize asset loading
   - Implement proper caching headers

### 5. Monitoring and Logging

1. **Application monitoring**:
   - Set up error tracking (Sentry, etc.)
   - Monitor response times
   - Track API usage

2. **Database monitoring**:
   - Monitor connection pools
   - Track query performance
   - Set up alerts for slow queries

### 6. Backup Strategy

1. **Database backups**:
   - Enable automatic backups
   - Test restore procedures regularly
   - Store backups in multiple locations

2. **Code backups**:
   - Use version control (GitHub)
   - Tag production releases
   - Document deployment procedures

### 7. Disaster Recovery

1. **Rollback procedures**:
   - Tag Docker images
   - Document rollback steps
   - Test rollback procedures

2. **Incident response**:
   - Define escalation procedures
   - Set up monitoring alerts
   - Document common issues and solutions

## Deploying to Production

### 1. Pre-deployment Checklist

- [ ] Test all functionality in staging
- [ ] Verify database connection
- [ ] Check environment variables
- [ ] Review security settings
- [ ] Confirm backup procedures
- [ ] Test rollback procedures

### 2. Deployment Steps

1. **Create production service on Render**:
   - Use the production Dockerfile
   - Set production environment variables
   - Configure custom domain (if needed)

2. **Run initial migrations**:
   ```bash
   npx prisma migrate deploy
   ```

3. **Verify deployment**:
   - Check health endpoint: `/health`
   - Test critical functionality
   - Monitor logs for errors

### 3. Post-deployment

- [ ] Update DNS records (if using custom domain)
- [ ] Test all integrations
- [ ] Monitor performance metrics
- [ ] Set up monitoring alerts
- [ ] Document the deployment

## Scaling Considerations

1. **Horizontal scaling**:
   - Use load balancers
   - Implement session storage (Redis)
   - Design stateless services

2. **Vertical scaling**:
   - Monitor resource usage
   - Upgrade instance types as needed
   - Optimize database queries

## Maintenance

1. **Regular updates**:
   - Update dependencies regularly
   - Apply security patches
   - Test updates in staging first

2. **Database maintenance**:
   - Monitor database performance
   - Optimize queries
   - Clean up old data

3. **Monitoring**:
   - Review logs regularly
   - Set up alerting for critical issues
   - Monitor user feedback

## Troubleshooting Production Issues

### Common Production Issues

1. **Database connection failures**:
   - Check connection string
   - Verify database availability
   - Review connection pool settings

2. **Performance degradation**:
   - Check resource usage
   - Review slow query logs
   - Optimize database queries

3. **Security incidents**:
   - Review access logs
   - Rotate compromised secrets
   - Implement additional security measures

### Emergency Procedures

1. **Service outage**:
   - Check Render dashboard for errors
   - Review application logs
   - Rollback to previous version if necessary

2. **Data corruption**:
   - Stop application immediately
   - Restore from latest backup
   - Investigate root cause

3. **Security breach**:
   - Isolate affected systems
   - Rotate all secrets
   - Conduct security audit