import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo } from '../data';
import aayushImage from '../assets/images/aayush.jpg';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={aayushImage}
          alt={personalInfo.name}
          className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-purple-500/20 hero-image"
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text"
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl text-gray-400 mb-8 font-light"
        >
          {personalInfo.role}
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="animate-bounce inline-block cursor-pointer"
          >
            <ArrowDown className="text-purple-400 hover:text-purple-300 transition-colors" size={32} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;