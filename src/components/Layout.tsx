import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-bold text-xl">Aayush Shrestha</Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  } block px-3 py-2 text-base`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>

      <footer className="bg-gray-900/50 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <a href="https://github.com/aayush" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/aayush" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:aayustha21@gmail.com" className="text-gray-400 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Aayush Shrestha. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;