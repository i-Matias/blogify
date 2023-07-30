# Frontend

The frontend of the Blog Website is built with React and utilizes React Router for navigation and Axios for making RESTful API calls. Bootstrap is used for styling and responsiveness, providing a visually appealing and user-friendly experience. The folder structure follows a standard React application structure for easy maintenance and organization.

## Folder Structure

The frontend folder structure is as follows:
```
├── public
│ ├── index.html
│ ├── favicon.ico
│ └── ...
├── src
│ ├── components: Contains reusable React components used throughout the application.
│ │ ├── Header.js
│ │ ├── Post.js
│ │ ├── ...
│ ├── App.js: The main component that sets up the routing and renders the page content.
│ ├── index.js: The entry point of the application, responsible for rendering the App component to the DOM.
│ └── ...
├── package.json
├── package-lock.json
└── ...
```
## Features


- **Blog Post Listing**: The homepage displays a list of blog posts fetched from the backend's API, showing essential details like the post title, content, and publication date.

- **Single Blog Post View**: Users can click on a blog post to view its full content, there they can delete the post as well

- **Create new Posts**:

- **Responsive Design**: The frontend is built with Bootstrap to ensure optimal display on various screen sizes and devices.

## Getting Started

To get started with the frontend development, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/i-Matias/blogify.git
