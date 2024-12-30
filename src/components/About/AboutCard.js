import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, my name is <span className="purple">Tony Zhang </span>
            and I am from <span className="purple"> Salt Lake City, Utah.</span>
            <br />
            I am currently a student at the Univeristy of Utah, pursuing of Bachelor of Science in <span className = "purple"> Data Science</span>.
            <br />
            Apart from coding, these are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Muay Thai
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
