import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMysql,
  DiMongodb,
  DiJava,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {


} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      

    </Row>
  );
}

export default Techstack;