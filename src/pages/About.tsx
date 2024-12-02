import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="About Me"
        subtitle="Learn more about my background and journey"
      />
      <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400&h=400"
            alt={personalInfo.name}
            className="rounded-lg w-full object-cover aspect-square"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">{personalInfo.name}</h2>
            <p className="text-gray-300 mb-4">{personalInfo.summary}</p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-semibold text-white">Education:</span><br />
                {personalInfo.education}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;