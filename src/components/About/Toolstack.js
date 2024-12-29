import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows,
  SiJupyter,
  SiRstudio,
  SiNotion,
  SiObsidian,
  SiTodoist,
  SiGooglecolab
} from "react-icons/si";

function Toolstack() {
  // Array of tools with their corresponding icons, names, and links
  const tools = [
    { icon: <SiWindows />, name: "Windows", link: "https://www.microsoft.com/windows" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code", link: "https://code.visualstudio.com/" },
    { icon: <SiJupyter />, name: "Jupyter", link: "https://jupyter.org/" },
    { icon: <SiRstudio />, name: "RStudio", link: "https://posit.co/products/open-source/rstudio/" },
    { icon: <SiNotion />, name: "Notion", link: "https://www.notion.so/" },
    { icon: <SiObsidian />, name: "Obsidian", link: "https://obsidian.md/" },
    { icon: <SiTodoist />, name: "Todoist", link: "https://todoist.com/" },
    { icon: <SiGooglecolab />, name: "Google Colab", link: "https://colab.google/" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tech, index) => (
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

export default Toolstack;
