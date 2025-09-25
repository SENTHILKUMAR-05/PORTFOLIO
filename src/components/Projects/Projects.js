import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Authentication from "../../Assets/Projects/Authentication.png";
import img from "../../Assets/Projects/context_mern.png";
import bitcrud from "../../Assets/Projects/bit_crud.png";
import Lappify from "../../Assets/Projects/Lappify.png";
import bootst from "../../Assets/Projects/bootst.png";
import newsapp from "../../Assets/Projects/newsapp.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lappify}
              isBlog={false}
              title="Lappify"
              description="Lappify – A responsive laptop showcase website built with HTML, CSS, and JavaScript, featuring multi-page navigation, brand highlights, interactive elements, and a mobile-first design for seamless browsing."
              ghLink="https://github.com/SENTHILKUMAR-05/Lappify_sample-project"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="NewsApp"
              description="A modern React-based News Application that integrates with NewsAPI to deliver real-time headlines. Includes category-based filtering, responsive design, and a clean user interface built with React Bootstrap."
              ghLink="https://github.com/SENTHILKUMAR-05/react-news-app"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcrud}
              isBlog={false}
              title="Crud Applications"
              description="A CRUD (Create, Read, Update, Delete) application built with React.js for managing student data. This project features a user-friendly form for data entry, a dynamic table to display records, and intuitive edit and delete functionalities. It's a strong example of a practical, single-page application that showcases effective front-end development and state management."
              ghLink="https://github.com/SENTHILKUMAR-05/Crud_mern"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Authentication}
              isBlog={false}
              title="Authentication"
              description="JWT Auth MERN is a full-stack application built with MongoDB, Express, React, and Node.js, implementing a secure authentication flow using JSON Web Tokens and bcrypt. It features protected routes, login/signup functionality, and client-server integration with token-based authorization."
              ghLink="https://github.com/SENTHILKUMAR-05/jwt-authentication-mern"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bootst}
              isBlog={false}
              title="Bootstrap"
              description="A responsive web page built with Bootstrap 5 showcasing various UI components such as grids, tables, buttons, cards, accordions, alerts, spinners, and progress bars. This project serves as a practice/demo template for learning Bootstrap’s layout system and predefined styling classes."
              ghLink="https://github.com/SENTHILKUMAR-05/Bootstrap-UI-Components-Demo"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img}
              isBlog={false}
              title="React Shopping Cart Demo"
              description="A React app using Context API for global state management with authentication (login/logout), light/dark theme toggle, and shopping cart functionality. Built with React Hooks to showcase scalable state handling without Redux."
              ghLink="https://github.com/SENTHILKUMAR-05/React-context-auth-cart"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
