# Movies Manager

An Angular 19 frontend for browsing, searching, rating, and managing a movie catalog backed by the separate [MoviesAPI](https://github.com/MykolaDotsenko/MoviesAPI) ASP.NET Core service.

[Open the frontend](https://moviesmanagermykola.web.app/) · [Backend repository](https://github.com/MykolaDotsenko/MoviesAPI)

Movies Manager demonstrates a typed Angular client around real application workflows: public movie discovery, authenticated management screens, reusable form components, map-based theater editing, rating UI, image input, API error display, and token-based requests to the backend.

## User flows implemented

- browse movie lists and open movie details
- search movies with query parameters
- create and edit movies with title, poster/image, release date, trailer, genres, actors, and theater data
- create and edit actors, genres, and theaters
- place theaters on a Leaflet map through shared map components
- register and log in through the security module
- send authenticated API requests through the token interceptor
- display backend validation/API errors through shared UI
- rate movies through the rating service and rating component

## What this repository demonstrates

- Angular 19 application structure with routed feature areas for movies, actors, genres, theaters, and security
- reusable CRUD helpers such as create/edit/index entity components
- forms and validation helpers for data-entry heavy screens
- Angular Material UI patterns with RxJS-based API workflows
- Leaflet integration for spatial input
- frontend/backend separation with MoviesAPI as the REST service
- Firebase-hosted frontend deployment

## Stack

- Angular 19 and TypeScript
- Angular Material
- Angular Forms
- RxJS
- Leaflet via `@bluehalo/ngx-leaflet`
- SweetAlert2
- Moment date formatting
- Firebase Hosting
- MoviesAPI backend integration

## Run locally

```bash
npm install
npm start
```

Run `npm run build` for a production build and `npm test` for the configured Angular test runner.

Backend-dependent flows require the MoviesAPI service and matching environment/API configuration. Authentication, protected management screens, uploads, maps, ratings, and validation responses should be reviewed together with the backend repository.

## Related backend

[MoviesAPI](https://github.com/MykolaDotsenko/MoviesAPI) contains the ASP.NET Core REST API, SQL Server/EF persistence, DTOs, validation, authentication packages, spatial data support, Azure Blob Storage integration, and Swagger/OpenAPI surface used by this frontend.
