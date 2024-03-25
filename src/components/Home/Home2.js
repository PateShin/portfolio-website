import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/KoreanKiwi.png";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="blue"> MYSELF </span>
            </h1>
            <p className="home-about-body">
              I am a Year 2 Computer Science Student at the National University.
              <br />
              <br />
              I was born in <span className="blue">South Korea</span> and lived in <span className="blue">New Zealand</span> from 2014 to 2021.
              <br />
              <br />
              This website acts as a portfolio, highlighting the skillsets, projects, and more.
              <br />
            </p>
            <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PateShin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/patrick-starfish/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pshin_star/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
