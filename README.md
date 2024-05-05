# NASA-API-Project
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/V1F4A3D5)

![image](https://github.com/sliitcsse/se3040-assignment02-DilunVass/assets/100837990/904fff39-3885-45cf-95b0-b3e008b02187)

This is the url of deployed website - https://effulgent-belekoy-7ca97b.netlify.app/

Name – De Vass Gunawardane A.P.D.N
IT Number – IT21288012

About the project
•	Application Overview – This web application is built using React JS, React MUI designs and ANT designs.
•	All the data in the application is fetched from NASA API endpoints.
•	Application provides Astronomy pictures of the day, mars rover images and asteroid index.
•	The application provides an interactive and responsive user experience.
Setup Instructions
1.	Environment Setup - Install Node.js and npm (Node Package Manager) if they are not already installed. Clone the repository to your local machine using git clone.
2.	Dependency Installation - In your terminal, navigate to the project directory and run npm install to install all the necessary dependencies for the project.
3.	Running the Application - In the terminal, execute npm start to run the application in development mode. Open http://localhost:3000 in your web browser to view the application.
Build Process
1.	Building the Application - Run npm run build to create a production build of the application. This command compiles the React application into static files for deployment in the build directory.
2.	Deployment - The static files in the build directory can be deployed to any static content hosting service, such as GitHub Pages or Netlify.
Challenges and Resolutions
•	API Rate Limiting: The application first exceeded the permitted rates. This problem was fixed by using caching techniques to lower the volume of queries sent to the NASA APIs. 
•	Managing Asynchronous Data: It was difficult to control asynchronous data retrieval processes. 
•	React's useEffect hook was used to handle API queries and update the state when data was received to fix this. Responsive Design: At first, it was difficult to make sure the program appeared well on different devices. Making the application responsive was aided using the antd grid technology.

