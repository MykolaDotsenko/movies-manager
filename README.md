# Movies Manager — Full-Stack Cinema Platform

A single full-stack repository with an explicit boundary between the **Angular frontend** and the **ASP.NET Core backend**.

> **Frontend:** Angular 19 · TypeScript · Angular Material · RxJS · Leaflet  
> **Backend:** ASP.NET Core 9 · Entity Framework Core · SQL Server · NetTopologySuite · Azure Blob Storage

## Repository structure

~~~text
movies-manager/
├── frontend/              # Angular SPA
├── backend/               # ASP.NET Core REST API
├── docs/
│   ├── architecture.md
│   └── migration.md
└── .github/workflows/
    └── fullstack-ci.yml
~~~

The split is deliberate: a reviewer can inspect either layer independently and still follow one end-to-end product.

## Full-stack architecture

~~~mermaid
flowchart LR
    U[Browser] --> F[Angular frontend]
    F -->|HTTPS / JSON / JWT| A[ASP.NET Core API]
    A --> D[(SQL Server)]
    A --> G[NetTopologySuite]
    A --> B[Azure Blob Storage]
~~~

### Frontend

Owns browser and presentation concerns:

- routing and navigation;
- reactive forms and client-side validation;
- authentication UI and JWT transport;
- movie, actor, genre, theater and user-management screens;
- search/filter interactions;
- Leaflet map rendering;
- API requests and user-facing error states.

See [frontend/README.md](frontend/README.md).

### Backend

Owns server and persistence concerns:

- REST endpoints and DTO contracts;
- JWT authentication and claim-based authorization;
- Entity Framework Core persistence and migrations;
- SQL Server relational data;
- NetTopologySuite geospatial support;
- Azure Blob Storage integration;
- Swagger/OpenAPI.

See [backend/README.md](backend/README.md).

## Local development

Run the two applications independently.

### Backend

~~~bash
cd backend
dotnet restore
dotnet run
~~~

### Frontend

~~~bash
cd frontend
npm ci
npm start
~~~

Angular runs at `http://localhost:4200`. The development API URL remains defined in `frontend/src/environments/environment.development.ts`.

## Configuration

Production/shared secrets must come from environment variables or the deployment platform, never Git:

~~~text
ConnectionStrings__DefaultConnection
ConnectionStrings__AzureStorageConnection
AllowedOrigins
jwtkey
~~~

The committed backend development settings contain only safe local-development values.

## CI

GitHub Actions exposes the two halves independently:

- **Frontend · Angular build** — clean npm install + production build.
- **Backend · .NET build** — restore + Release build.

This makes full-stack breadth obvious while keeping failures attributable to the correct layer.

## Security note

During consolidation, a previously committed development file containing real credentials was **not copied**. The canonical repository contains a sanitized replacement.

Any credential that has appeared in a public Git history must still be rotated at its provider; deleting or replacing the current file does not invalidate the old value.

## Provenance

- Frontend history: this repository, before the move to `frontend/`.
- Backend snapshot: imported from `MykolaDotsenko/MoviesAPI` at `11a6f5e8450184a12c7264adf9f86954a8a5fa73`.
- The original backend repository remains the historical record for commits made before consolidation.

See [docs/migration.md](docs/migration.md).

## Scope of this refactor

This change intentionally consolidates **repository structure, documentation, CI and secret hygiene** without redesigning application behavior. Framework upgrades, auth hardening and domain refactors belong in separate reviewable pull requests.
