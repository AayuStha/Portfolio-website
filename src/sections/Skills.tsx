import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillLevel {
  name: string;
  level: number;
  icon: string;
}

const skillLevels: SkillLevel[] = [
  { name: 'JavaScript', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', level: 20, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', level: 30, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', level: 40, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express.js', level: 47, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'PHP', level: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Git', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Firebase', level: 40, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
];

const SkillCard = ({ skill, index }: { skill: SkillLevel; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-6 hover:bg-purple-900/40 transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 object-contain filter brightness-100 hover:brightness-125 transition-all"
        />
        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
      </div>
      <div className="space-y-2">
        <div className="skill-slider" style={{ '--progress': `${skill.level}%` } as React.CSSProperties} />
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Proficiency</span>
          <span className="text-purple-400">{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-400">Proficiency in various technologies</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillLevels.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-gray-300 max-w-2xl mx-auto">
          Continuously learning and expanding my skill set in modern web technologies and development practices.
        </p>
      </motion.div>
    </div>
  );
};

export default Skills;