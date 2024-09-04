import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.jpeg";
import score from "../../Assets/Projects/score.jpeg";
import nutrition from "../../Assets/Projects/nutrition.jpeg";
import compress from "../../Assets/Projects/compress.jpeg";

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
              imgPath={ecommerce}
              isBlog={false}
              title=""
              description="Automated test scripts for an e-commerce website using Selenium WebDriver and Python's unittest framework. Covers user registration, login, product search, cart operations, and checkout processes. Run tests with python run_tests.py after setting up the environment and ChromeDriver."
              ghLink="https://github.com/bhuvanarao2003/GadgetSiteSoftwareTesting.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nutrition}
              isBlog={false}
              title=""
              description="The Nutrition Estimation Project is a web application designed to help users estimate their nutritional needs. The application includes features such as BMI calculation and a calorie estimator. This project is built using AngularJS for the front end, Node.js for the back end, CSS for styling, and SQL for database management."
              ghLink="https://github.com/bhuvanarao2003/DBMS-project.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compress}
              isBlog={false}
              title=""
              description="The Image Compressor App is a user-friendly web application built with ReactJS, designed to efficiently reduce image file sizes while maintaining quality"
              ghLink="https://github.com/bhuvanarao2003/image-compressor.io.git"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={score}
              isBlog={false}
              title="Score Spotter"
              description="Automated marks output of the college website which is beneficial for the students with the help of uipath Automation explorer"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;