import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME  INTRODUCE MYSELF
            </h1>
            <p className="home-about-body">
              I love uncovering insights through data and building innovative solutions.
              <br /> <br />I have worked extensively with tools and languages such as
              <i> <b className="purple">Python, R, and C++</b> </i>,
              and I am continuously exploring new technologies to enhance my skillset.
              <br /> <br /> My fields of interest include
              <i> <b className="purple">Machine Learning</b></i> and 
              <i> <b className="purple"> Computational Simulations</b></i>.
              <br /> <br /> Whenever possible, I enjoy applying my knowledge to real-world challenges by developing projects that leverage 
              <b className="purple"> data-driven decision-making</b>.
            </p>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ZhangHuTony"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:zhanghutony@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tony-hu-zhang/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_zhang.tony.66/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
