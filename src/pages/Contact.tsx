import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { ref, push, getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { personalInfo } from '../data';

const firebaseConfig = {
  apiKey: "AIzaSyDf3SSWXo3m8Q65R54ZHSXhcUdyi_f05sg",
  authDomain: "portfoliocontact-364ee.firebaseapp.com",
  databaseURL: "https://portfoliocontact-364ee-default-rtdb.firebaseio.com",
  projectId: "portfoliocontact-364ee",
  storageBucket: "portfoliocontact-364ee.firebasestorage.app",
  messagingSenderId: "1093662965320",
  appId: "1:1093662965320:web:57c9591ac2d44a857da27d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const messagesRef = ref(db, 'messages');
      await push(messagesRef, {
        ...formData,
        timestamp: new Date().toISOString()
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-400">Let's create something amazing together</p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-300">Contact Information</h3>
            <div className="space-y-6">
              <motion.a
                whileHover={{ x: 5 }}
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>{personalInfo.contact.email}</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href={`tel:${personalInfo.contact.phone}`}
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>{personalInfo.contact.phone}</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span>GitHub Profile</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn Profile</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
              className="w-full px-4 py-3 bg-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-gray-400"
              required
              placeholder="Your name"
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
              className="w-full px-4 py-3 bg-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-gray-400"
              required
              placeholder="your.email@example.com"
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
              className="w-full px-4 py-3 bg-purple-900/30 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none text-white placeholder-gray-400"
              required
              placeholder="Your message here..."
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-purple-600 hover:to-pink-600'
            }`}
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>
          {submitStatus === 'success' && (
            <p className="text-green-400 text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;