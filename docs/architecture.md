# Architecture

Movies Manager is a two-application monorepo. The structure is intentionally explicit so frontend and backend engineering can be evaluated separately and as one integrated system.

## Runtime view

~~~text
┌──────────────────────────────┐
│ frontend/                    │
│ Angular + TypeScript         │
│                              │
│ UI · routes · forms · maps   │
│ JWT transport · API client   │
└──────────────┬───────────────┘
               │ HTTPS / JSON
               │ Authorization: Bearer <JWT>
               ▼
┌──────────────────────────────┐
│ backend/                     │
│ ASP.NET Core                 │
│                              │
│ API · auth · validation      │
│ EF Core · storage adapters   │
└──────────┬───────────┬───────┘
           │           │
           ▼           ▼
      SQL Server   Azure Blob Storage
           │
           └── geospatial types via NetTopologySuite
~~~

## Frontend boundary

The browser application may know HTTP contracts, view models and authentication transport. It must not be trusted for authorization or server invariants.

## Backend boundary

The API is authoritative for identity, authorization, persistence and server-side validation. Browser state is never a security boundary.

## Integration contract

The applications communicate through REST/JSON. Protected calls use JWT Bearer authentication. Backend CORS policy is configured through `AllowedOrigins`.

## Deployment

The two layers are independently deployable:

- Angular as static web assets;
- ASP.NET Core as an API service;
- SQL Server as relational persistence;
- Azure Blob Storage for media.

Independent deployment is preserved even though product evolution now happens in one canonical repository.

## Quality gates

CI deliberately uses separate jobs:

1. frontend clean install and production build;
2. backend restore and Release build.

Tests should be added to the corresponding layer rather than hidden behind one opaque monolithic job.

## Refactor strategy

The consolidation commit changes structure, documentation and security hygiene while preserving runtime behavior. Framework upgrades and architecture redesigns should be follow-up changes so regressions remain attributable and reviewable.
