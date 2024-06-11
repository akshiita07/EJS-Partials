### Project Name:
Personal Portfolio Website displaying EJS Partials

### Brief Explanation:
This project involves creating a personal portfolio website using the Express.js framework and EJS templating engine. The site comprises three main pages: Home, About, and Contact, each rendered dynamically using EJS templates. It showcases the creator's academic achievements, skills, and provides a contact form for visitors to reach out.

### Key Components:
- **Express.js**: Handles server-side logic and routing.
- **EJS**: Manages dynamic content rendering and template inclusion for common elements like headers and footers.
- **Static Files**: CSS and images are served from a 'public' directory to enhance the visual design.
- **Bootstrap**: Ensures the site is responsive and user-friendly across different devices.

### Functionality:
- **Home Page**: Displays an introduction and educational background.
- **About Page**: Details skills, tools, and course curriculum with a profile image.
- **Contact Page**: Features a form for visitors to submit their contact information and messages.

### Setup:
1. Initialize the project: `npm init`
2. Install Express and EJS: `npm install express ejs`
3. Set up the server and routes to render EJS templates and serve static files.

### Running the Project:
Start the server with `node app.js` and access the website at `http://localhost:3000`. The site dynamically renders content and provides a consistent layout using reusable EJS partials for the header and footer.
