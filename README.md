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

https://moviesapi20250415161440-ahfxgzdpb8e4dbgk.canadacentral-01.azurewebsites.net/swagger/index.html
MoviesAPI provides a comprehensive backend for movie management with the following features:
- **Movie CRUD Operations**: Create, read, update, and delete movies with details like title, release year, synopsis, and more.
- **Genre Management**: Organize movies by genres for easy filtering and categorization.
- **User Authentication**: Secure user registration and login using JWT for protected endpoints.
- **Image Uploads**: Seamlessly upload and retrieve movie posters, integrated with cloud storage.
- **Geospatial Queries**: Find movies by filming locations using spatial data, adding a unique interactive layer.
- **Reviews System**: Allow users to submit and view movie reviews (optional feature).

## 🛠️ Technologies Used

The project leverages cutting-edge tools and frameworks to ensure performance, scalability, and maintainability:
- **ASP.NET Core 8**: A high-performance framework for building RESTful APIs with clean architecture.
- **Entity Framework Core**: ORM for efficient database operations and migrations.
- **SQL Server**: Reliable relational database for storing movie and user data.
- **NetTopologySuite**: Enables geospatial queries for location-based features.
- **Azure Blob Storage**: Scalable cloud storage for movie posters and assets.
- **JWT Authentication**: Secures API endpoints with token-based authentication.
- **Serilog**: Structured logging for monitoring and debugging.
- **Swagger**: API documentation for easy testing and integration.
- **xUnit & Moq**: Unit testing to ensure code reliability.

## 🧠 Implementation Logic

The API follows a **clean architecture** approach, ensuring separation of concerns and maintainability:
- **Controllers**: Handle HTTP requests and responses, keeping endpoints lightweight and focused.
- **Services**: Encapsulate business logic, such as movie validation, genre association, and user management.
- **Repositories**: Abstract database interactions, leveraging EF Core for CRUD operations and spatial queries.
- **DTOs**: Use Data Transfer Objects to optimize data exchange and reduce over-fetching.
- **Dependency Injection**: Enhances modularity and testability by injecting services and repositories.
- **Middleware**: Implements authentication, error handling, and logging for a robust request pipeline.
- **Cloud Integration**: Azure Blob Storage manages file uploads, ensuring scalability for high traffic.
