import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Experience</h2>
        <p className="text-gray-400">My professional journey</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 last:pb-0"
          >
            <div className="absolute left-0 top-0 h-full w-px bg-purple-500/30">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500" />
            </div>
            <div className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                  <p className="text-purple-400">{experience.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">{experience.period}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;