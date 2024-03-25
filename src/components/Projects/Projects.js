import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import prediction from "../../Assets/Projects/stockPrediction.png";
import foodOrder from "../../Assets/Projects/foodOrder.png";
import textSentimentKorean from "../../Assets/Projects/textSentimentKorean.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="blue"> MY PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodOrder}
              isBlog={false}
              title="Food Ordering System"
              description="This project is a pasta order management system designed for both delivery and pick-up service, featuring a GUI for order entry functions. It allows both pickup and delivery orders, including the creation, viewing, and deletion of orders, as well as the management of customer details."
              ghLink="https://github.com/PateShin/food-order-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textSentimentKorean}
              isBlog={false}
              title="Text-Sentiment-Analysis-Korean"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/PateShin/Text-Sentiment-Analysis-Korean"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prediction}
              isBlog={false}
              title="Stock-Prediction"
              description="The objective of this project is to forecast the future prices of stocks through the use of Long Short-Term Memory (LSTM), a variant of recurrent neural networks (RNNs) that are adept at handling time series data."
              ghLink="https://github.com/PateShin/stock-prediction"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
