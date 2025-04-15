# Movies Manager

Welcome to **Movies Manager**, a dynamic and user-friendly Angular frontend application designed to bring movie management to life! This single-page application (SPA) offers a seamless experience for browsing, managing, and visualizing movie data, paired with a modern UI and innovative features like interactive maps.

## 🎥 Functionality

Movies Manager empowers users with the following features:
- **Browse Movies**: Explore a catalog of movies with details like title, genre, release year, and posters, displayed in a sleek, filterable list.
- **Movie Details**: Dive into comprehensive movie profiles, including synopses, ratings, and more.
- **Add & Edit Movies**: Intuitive forms for creating or updating movie entries, with real-time validation.
- **Interactive Maps**: Visualize filming locations on a dynamic map, adding a unique geospatial dimension.
- **User Notifications**: Beautiful alerts for actions like saving or deleting movies, enhancing interactivity.
- **Responsive Design**: A mobile-friendly interface that looks great on any device.

## 🛠️ Technologies Used

The project leverages modern frontend tools to deliver a polished and performant application:
- **Angular 19**: A powerful framework for building scalable SPAs with component-based architecture.
- **Angular Material**: Provides a modern, responsive UI with components like tables, dialogs, and forms.
- **Leaflet**: Powers interactive maps for displaying movie-related geospatial data.
- **SweetAlert2**: Adds stylish pop-up notifications for a delightful user experience.
- **Moment.js**: Handles date formatting, ensuring clean presentation of release dates.
- **RxJS**: Enables reactive programming for efficient data handling and API interactions.
- **TypeScript**: Ensures type-safe, maintainable code with strict typing.
- **Karma & Jasmine**: Supports unit testing for reliable, bug-free components.
- **Angular CLI**: Streamlines development, building, and deployment workflows.

## 🧠 Implementation Logic

Movies Manager is built with a **modular and maintainable** architecture:
- **Components**: Organized into reusable units like `MovieListComponent`, `MovieFormComponent`, `MovieDetailComponent`, and `MapComponent`, each handling specific UI tasks.
- **Services**: A `MovieService` manages HTTP requests to the backend API, handling data fetching and updates with RxJS observables for asynchronous operations.
- **Models**: TypeScript interfaces define movie data structures, ensuring consistency across the app.
- **Reactive Forms**: Used for adding/editing movies, with validation to prevent errors and improve UX.
- **State Management**: Leverages Angular’s dependency injection and RxJS to manage UI state efficiently.
- **Map Integration**: Leaflet is configured to render filming locations, pulling geospatial data from the backend.
- **Notifications**: SweetAlert2 displays success/error messages, triggered by user actions or API responses.
- **Routing**: Angular Router enables seamless navigation between movie lists, details, and forms.

The app integrates with a backend API (e.g., ASP.NET Core) to fetch and persist data, using environment configurations for flexible deployment. Unit tests with Karma and Jasmine ensure component reliability, while Angular Material’s theme system delivers a cohesive, professional look.

## 🌟 Why This Project Stands Out

Movies Manager highlights my expertise in:
- Building **responsive, user-centric** Angular applications.
- Integrating **external libraries** like Leaflet and SweetAlert2 for enhanced functionality.
- Writing **clean, type-safe** TypeScript code with a focus on scalability.
- Implementing **reactive patterns** with RxJS for efficient data flow.
- Delivering **tested, maintainable** codebases ready for production.

This project demonstrates my ability to create engaging frontends that pair seamlessly with backend APIs, making it an ideal showcase for full-stack development skills. Explore the code to see my craftsmanship in action!

---

**Get Started**:
1. Clone the repository: `git clone https://github.com/MykolaDotsenko/movies-manager.git`
2. Install dependencies: `npm install`
3. Configure API URL in `src/environments/environment.ts`
4. Run the app: `ng serve`
5. Visit `http://localhost:4200` to explore the movie manager!

**Connect**: I’m excited to discuss how my frontend skills can add value to your team—let’s build something amazing together!

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
