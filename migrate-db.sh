#!/bash/sh
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet ef migrations remove