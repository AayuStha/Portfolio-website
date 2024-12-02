import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact</h2>
        <p className="text-gray-400">Get in touch with me</p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail size={20} />
                {personalInfo.contact.email}
              </a>
              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Phone size={20} />
                {personalInfo.contact.phone}
              </a>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
                GitHub Profile
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-2 bg-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;