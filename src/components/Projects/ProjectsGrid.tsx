import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import content from "../../content/content.json";

export default function ProjectsGrid() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {content.projectsSection.projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          //   image={project.image}
          githubLink={project.githubLink}
          projectUrl={project.projectUrl ? project.projectUrl : ""}
          techStack={project.techStack}
        />
      ))}
    </SimpleGrid>
  );
}
