import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import UrbanGrowth from "../../Assets/Projects/UsUrbanGrowthMap.png";
import D1ChemoGrad from "../../Assets/Projects/d1chemgradsim.png";
import ChemoVis from "../../Assets/Projects/twodchemokinevis.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UrbanGrowth}
              isBlog={false}
              title="US Urban Growth Visualization"
              description="A web based data visualization of urban growth factors in the United States from 2012-2024. Built using D3.js for the final project in my undergraduate visualizaton for data science course."
              ghLink="https://github.com/dataviscourse2024/group-project-urban-growth-visualization?tab=readme-ov-file"
              demoLink="https://dataviscourse2024.github.io/group-project-urban-growth-visualization/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={D1ChemoGrad}
              isBlog={false}
              title="1D Tumor Chemokine Gradient T-Cell Simulation"
              description="A computational simulation coded in R which attempted to model the T-cell movement within a tumor based on the amount of chemokine being produced by 2 different cancer phenotypes."
              ghLink="https://github.com/ZhangHuTony/1D-ChemokineGradientSim/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChemoVis}
              isBlog={false}
              title="2D Tumor Chemokine Gradient T-Cell Simulation Visualization"
              description="A project building off of the 1D Tumor Chemokine Gradient T-Cell Simulation Project. This project extends the chemokine diffusion and T-cell movement into 2 dimensions which is then 
              visualized in the award winning open source visualization software ParaView."
              ghLink="https://github.com/ZhangHuTony/2D_ChemokineGradientVis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
