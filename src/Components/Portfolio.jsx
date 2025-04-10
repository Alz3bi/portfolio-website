/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Learnify",
    description:
      "Learnify is a modern learning management system designed to facilitate study center operations and enhance the educational experience for students and instructors. The platform supports course management, user authentication, and performance tracking. Built using C# with ASP.NET Core for the back-end, it features secure and efficient RESTful APIs. The front-end, developed with React.js and styled with Tailwind CSS, provides a dynamic and responsive user interface.",
    url: "",
  },
  {
    title: "Dern Support",
    description:
      "The Dern Support System is a comprehensive platform designed to streamline customer support operations. It enables support teams to manage user inquiries, track tickets, and ensure efficient resolution of issues. The back-end was developed using C# with ASP.NET Core, incorporating RESTful APIs to handle data communication seamlessly. The front-end, built with React.js, provides a clean and responsive interface for managing support tickets. The system is powered by Entity Framework and SQL, ensuring robust and scalable database management.",
    url: "",
  },
  {
    title: "Fitness Hub",
    description:
      "Fitness Hub is a web-based platform designed to help users monitor their fitness routines and achieve their health goals. The application allows users to log workouts, set personalized fitness objectives, and track progress over time. The back-end was developed using Node.js and Express.js, providing robust RESTful APIs for seamless data management. The front-end, built with React.js, offers an intuitive and user-friendly interface, while the database, powered by SQL, ensures reliable storage and retrieval of user data.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
