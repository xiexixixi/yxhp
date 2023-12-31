import React from "react";
import { styled } from "styled-components";
import billshare from "../../assets/billsharedemo.png";
import tapnews from "../../assets/tapnews.png";

import view from "../../assets/morraine-lake.jpg";
import GAILL from "../../assets/GAILL.png";

import PortfolioProject from "./PortfolioProject";

export interface ProjectDetail {
  picture?: string;
  title: string;
  description: string;
  skills: string[];
  demoLink?: string;
  sourceLink?: string;
}
const projects: ProjectDetail[] = [
  {
    picture: GAILL,
    title: "EFAS-GAILL",
    description: "Generate-Based AI Leak Locator",
    skills: ["TypeScript", "React", "OpenLayers"],
    
  },
  {
    picture: billshare,
    title: "BillShare",
    description: "A mobile app to manage shared bills with friends",
    skills: ["React Typescript", "Spring Boot", "Spring Data JPA", "MySQL", "WebSocket", "Redis", "AWS"],
    demoLink: "https://www.youtube.com/watch?v=D1gZhuITnMw&t=5s",
    sourceLink: "https://github.com/darlingof02/billshare_frontend",
  },

  {
    picture: tapnews,
    title: "TapNews",
    description: "A web app that displays news collected from various news sources",
    skills: ["React", "Flask", "MongoDB", "Redis", "RabbitMQ"],
    demoLink: "https://www.youtube.com/watch?v=9Jdp9YM9IIk",
    sourceLink: "https://github.com/darlingof02/295p-team1-tapnews-main",
  },

  {
    picture: view,
    title: "Sports Process Analysis ",
    description: "An automatic highlight editor for tennis matches",
    skills: ["PyTorch", "OpenSMILE ", "OpenCV"],
    sourceLink: "https://github.com/xiexixixi/Sports_process_analysis",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfoiloContainer className="container">
        {projects.map((pd, idx) => (
          <PortfolioProject key={idx} {...pd} />
        ))}
      </PortfoiloContainer>
    </section>
  );
};

export default Portfolio;

const PortfoiloContainer = styled.div`
  /* width: var(--container-width-lg); */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    width: 60%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    width: 50%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
