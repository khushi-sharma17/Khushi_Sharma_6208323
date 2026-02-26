# ---------- BUILD STAGE ----------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o /app/publish


# ---------- RUNTIME STAGE ----------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Tell ASP.NET to listen on port 80 inside container
ENV ASPNETCORE_URLS=http://+:80

EXPOSE 80

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "WebApplication.dll"]
