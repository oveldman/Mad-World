#!/bash/sh

apt update
apt upgrade

# Install nginx
apt install nginx

# Install angular
apt install npm
npm install -g @angular/cli

# Install dotnet 5.0
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
dpkg -i packages-microsoft-prod.deb
apt-get update
apt-get install -y apt-transport-https
apt-get update
apt-get install -y dotnet-sdk-5.0
