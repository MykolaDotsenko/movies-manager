# Backend — ASP.NET Core REST API

This directory is the server side of the Movies Manager full-stack application. It was consolidated from the standalone `MykolaDotsenko/MoviesAPI` repository.

## Stack

- .NET 9 / ASP.NET Core
- Entity Framework Core
- SQL Server
- ASP.NET Core Identity
- JWT Bearer authentication
- NetTopologySuite
- Azure Blob Storage
- AutoMapper
- Swagger / OpenAPI

## Boundary

The backend is authoritative for authentication, authorization, persistence, server validation, geospatial data and file storage. The Angular client lives independently in [../frontend](../frontend).

## Main API domains

- movies;
- actors;
- genres;
- theaters;
- ratings;
- users and authentication.

## Run

~~~bash
dotnet restore
dotnet run
~~~

Swagger is available through the application's local `/swagger` route.

## Configuration

Never commit deployment credentials. Override configuration with environment variables or your deployment secret manager:

~~~text
ConnectionStrings__DefaultConnection
ConnectionStrings__AzureStorageConnection
AllowedOrigins
jwtkey
~~~

The committed `appsettings.Development.json` uses safe local-development values only.

## Database

After configuring SQL Server:

~~~bash
dotnet ef database update
~~~

## Build

~~~bash
dotnet build MoviesAPI.sln --configuration Release
~~~

The root CI pipeline builds this API independently from the Angular application.

## Provenance

Imported from `MykolaDotsenko/MoviesAPI` at commit `11a6f5e8450184a12c7264adf9f86954a8a5fa73`. The original backend repository preserves the standalone history before consolidation.
