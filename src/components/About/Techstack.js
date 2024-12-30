import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiCsharp,
  SiD3Dotjs,
  SiPandas,
  SiPytorch,
  SiR,
  SiScikitlearn,
} from "react-icons/si";

function Techstack() {
  // Array of technologies with their corresponding icons, names, and links
  const techStack = [
    { icon: <CgCPlusPlus />, name: "C++", link: "https://en.wikipedia.org/wiki/C%2B%2B" },
    { icon: <DiJavascript1 />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: <SiCsharp />, name: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { icon: <DiGit />, name: "Git", link: "https://git-scm.com/" },
    { icon: <DiPython />, name: "Python", link: "https://www.python.org/" },
    { icon: <SiR />, name: "R", link: "https://www.r-project.org/" },
    { icon: <DiJava />, name: "Java", link: "https://www.java.com/en/download/help/whatis_java.html" },
    { icon: <SiD3Dotjs />, name: "D3.js", link: "https://d3js.org/" },
    { icon: <SiPandas />, name: "Pandas", link: "https://pandas.pydata.org/" },
    { icon: <SiPytorch />, name: "PyTorch", link: "https://pytorch.org/" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn", link: "https://scikit-learn.org/" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {/* OverlayTrigger adds tooltip functionality */}
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
          >
            {/* Wrap the icon with a link */}
            <a href={tech.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div>{tech.icon}</div>
            </a>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;


