import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navItemVariants } from '../utils/animations';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-4' : 'py-6'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold gradient-text"
            >
              SE
            </motion.div>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.path;
              
              return (
                <motion.div
                  key={item.path}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  className="relative"
                >
                  <a
                    href={item.path}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                  
                  {/* Animated underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:ekanayakespm@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
