#!/bin/sh

# Change to the app directory
cd /app

# Function to check if database is ready
wait_for_db() {
  echo "Waiting for database to be ready..."
  local retries=30
  local wait_time=2
  
  until mysqladmin ping -h mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" --silent || [ $retries -eq 0 ]; do
    echo "Database is not ready yet. Retries left: $retries"
    sleep $wait_time
    retries=$((retries - 1))
  done
  
  if [ $retries -eq 0 ]; then
    echo "Database is not available. Exiting."
    exit 1
  fi
  
  echo "Database is ready!"
}

# Wait for the database to be ready
wait_for_db

# Run Prisma migrations
echo "Running Prisma migrations..."
if npx prisma migrate deploy; then
  echo "Prisma migrations completed successfully."
else
  echo "Prisma migrations failed. Exiting."
  exit 1
fi

# Start the application
echo "Starting the application..."
exec node server.js