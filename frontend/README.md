# Frontend — Angular SPA

This directory is the client side of the Movies Manager full-stack application.

## Stack

- Angular 19
- TypeScript
- Angular Material
- RxJS
- Leaflet
- SweetAlert2

## Boundary

The frontend owns UI, routing, forms, maps and HTTP/JWT transport. It does **not** own database rules, server authorization or cloud-storage credentials; those responsibilities live in [../backend](../backend).

## Main flows

- browse and search movies;
- open movie details;
- create/edit movies for authorized users;
- manage genres, actors and theaters;
- register/login and transport JWT credentials;
- render map/geospatial UI;
- rate movies and administer users.

## Run

~~~bash
npm ci
npm start
~~~

Development server: `http://localhost:4200`.

API configuration:

~~~text
src/environments/environment.development.ts
src/environments/environment.ts
~~~

## Build

~~~bash
npm run build
~~~

The root CI pipeline builds the frontend separately from the backend.

For the system-level view, see [../README.md](../README.md) and [../docs/architecture.md](../docs/architecture.md).
