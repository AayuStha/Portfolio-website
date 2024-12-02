import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import aayushImage2 from '../assets/images/aayush1.jpeg';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
          <p className="text-gray-400">Learn more about my journey</p>
        </div>
        
        <div className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={aayushImage2}
              alt={personalInfo.name}
              className="rounded-lg w-full object-cover shadow-xl"
            />
            <div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400">{personalInfo.name}</h3>
                <p className="text-gray-300 mb-6">{personalInfo.summary}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
                    <p className="text-gray-400">{personalInfo.education}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;