#Backend

The backend of the Blog Website is built with Spring Boot and uses various dependencies such as web, JPA, mysql, jdbc, etc. It follows the package structure below:

controller: Contains the RESTful API controllers to handle HTTP requests.
repository: Implements Spring Data JPA repositories for database interactions.
service: Provides business logic and acts as an intermediate layer between the controllers and repositories.
exceptions: Custom exception handling classes.
config: Configuration classes for Spring Boot.
model: Contains the Java classes representing entities and data models.