#!/bin/bash

# Update package lists
echo "Updating package lists..."
sudo yum update -y

# Install Apache2
echo "Installing Apache2 web server..."
sudo yum install apache2 -y

# Check the status of Apache2
echo "Checking Apache2 service status..."
sudo systemctl status apache2

#Remove existing index.html file from server
#rm  /var/www/index.html
echo "Apache installation and basic configuration complete."
echo "You can verify the installation by navigating to your server's IP address in a web browser."
