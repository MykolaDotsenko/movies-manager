# Movies Manager

An Angular 19 movie catalog and management interface paired with the separate [MoviesAPI](https://github.com/MykolaDotsenko/MoviesAPI) backend. It explores typed client-side forms, movie browsing, map views, and API-backed workflows.

[Open the frontend](https://moviesmanagermykola.web.app/) · [Backend repository](https://github.com/MykolaDotsenko/MoviesAPI)

## Project highlights

- Angular components and routes for browsing and managing movies
- Form handling through Angular Forms and Material components
- Leaflet integration for map-based location views
- RxJS for asynchronous API interactions
- SweetAlert2 notifications and Moment-based date formatting

The frontend is an Angular 19 and TypeScript application. Its `package.json` includes Angular Material, Leaflet, RxJS, and Jasmine/Karma tooling. The backend is a separate ASP.NET Core repository, so some flows depend on that service and its configuration.

## Run locally

```bash
npm install
npm start
```

Run `npm run build` for a production build and `npm test` for the configured Angular test runner. Review environment/API settings before using backend-dependent features.

This project is an earlier full-stack portfolio iteration. The public repository description focuses on the engineering work and does not expose demo credentials.
