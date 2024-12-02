import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="Projects"
        subtitle="Some of my recent work"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;