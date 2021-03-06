#!/bash/sh
#Get latest sources and updates
echo "Start script."
apt update
git reset --hard
git pull
dotnet tool update --global dotnet-ef

#update API
echo "Start deploying dotnet API."
systemctl stop kestrel-madworldapi.service
cd API/Mad-World.API
cp ../../../Settings/appsettings.Development.json .
cp ../../../Settings/appsettings.json .
dotnet restore
dotnet publish --configuration Release --output ../../../../Published/MadWorld/API
dotnet ef database update --context AuthenticationContext
dotnet ef database update --context MadWorldContext
systemctl start kestrel-madworldapi.service
echo "Dotnet API is deployed."

#update Website
echo "Start deploying angular website."
cd ../../Website
npm install
ng update
npm update
ng build --prod --output-path ../../../Published/MadWorld/Website
rm -r /var/www/html/*
mv ../../../Published/MadWorld/Website/* /var/www/html
echo "Angular website is deployed."
echo "The script is finsihed!"