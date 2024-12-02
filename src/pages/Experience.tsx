import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="Experience"
        subtitle="My professional journey"
      />
      <div className="max-w-3xl mx-auto">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;