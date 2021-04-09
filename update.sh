#!/bash/sh
#Get latest sources and updates
apt update
git pull

#update API
systemctl stop kestrel-madworldapi.service
cd API/Mad-World.API
dotnet restore
dotnet publish --configuration Release --output ../../../Published/MadWorld/API
systemctl start kestrel-madworldapi.service

#update Website
cd ../../Website
npm install
ng update
npm update
ng build --prod --output-path ../../../Published/MadWorld/Website
rm -r /var/www/html/*
mv ../../../Published/MadWorld/Website/* /var/www/html