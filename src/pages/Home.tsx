import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data';
import aayushImage from '../assets/images/aayush.jpg';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={aayushImage}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500/20"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">{personalInfo.role}</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">{personalInfo.summary}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            View Projects <ArrowRight size={20} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;