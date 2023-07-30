#Backend

The backend of the Blog Website is built with Spring Boot and uses various dependencies such as web, JPA, mysql, jdbc, etc. It follows the package structure below:
```
Backend
├── controller: Contains the RESTful API controllers to handle HTTP requests.
│   ├── BlogController.java
│   └── ...
├── repository: Implements Spring Data JPA repositories for database interactions.
│   ├── BlogRepository.java
│   └── ...
├── service: Provides business logic and acts as an intermediate layer between the controllers and repositories.
│   ├── BlogService.java
│   └── ...
├── exceptions: Custom exception handling classes.
│   ├── PostNotFoundException.java
│   └── ...
├── config: Configuration classes for Spring Boot.
│   ├── BlogConfig.java
│   ├── CorsConfig.java
│   └── ...
└── model: Contains the Java classes representing entities and data models.
    ├── Post.java
    └── ...
