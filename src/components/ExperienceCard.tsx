import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-6 mb-8 hover:bg-purple-900/40 transition-all"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-purple-300">{experience.title}</h3>
          <p className="text-purple-400 font-medium">{experience.company}</p>
        </div>
        <span className="text-gray-400 mt-2 md:mt-0 font-light">{experience.period}</span>
      </div>
      <p className="text-gray-300 leading-relaxed">{experience.description}</p>
    </motion.div>
  );
};

export default ExperienceCard;