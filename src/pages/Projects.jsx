import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { pageTransition, staggerContainer, staggerItem } from '../utils/animations';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const projects = [
    {
      title: 'Reid Connect',
      period: '2025 Jul – Present',
      description: 'Full-stack event management system for UCSC, enhancing student engagement with web and mobile applications.',
      tech: ['React', 'React Native', 'Spring Boot', 'PostgreSQL', 'Git'],
      github: 'https://github.com/ShashikaEkanayaka',
      status: 'Completed',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Adhyana - Learning Management System',
      period: '2024 Jul – 2025 Mar',
      description: 'Modular ERP system for educational institutions using microservices architecture. Designed and implemented the Exam Management Module.',
      tech: ['Java', 'MySQL', 'Microservices', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/ShashikaEkanayaka',
      status: 'Completed',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Job-Listings Platform',
      period: '2024 Jun – 2024 Nov',
      description: 'Job finding and posting system connecting job seekers and employers with real-time chat and CV sharing features.',
      tech: ['React', 'Vite', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux', 'Firebase'],
      github: 'https://github.com/ShashikaEkanayaka',
      status: 'Completed',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'MERN Blog Application',
      period: '2024',
      description: 'Full-featured blogging platform with CRUD operations for posts and comments. Mobile-first responsive design.',
      tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/ShashikaEkanayaka',
      status: 'Completed',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Restaurant Rating App',
      period: '2025',
      description: 'Cross-platform mobile app for restaurant ratings and reviews with secure authentication and analytics.',
      tech: ['React Native', 'Spring Boot', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/ShashikaEkanayaka',
      status: 'In Progress',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'MERN Crash Course',
      period: '2024',
      description: 'Practice project for building full-stack web applications using the MERN stack with modern tooling.',
      tech: ['React', 'Vite', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux'],
      github: 'https://github.com/ShashikaEkanayaka',
      status: 'Completed',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={pageTransition}
      className="min-h-screen pt-32 pb-20"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">My Projects</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            A collection of full-stack applications, mobile apps, and system architectures 
            I've built to solve real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-2xl p-6 flex flex-col h-full relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'In Progress' 
                    ? 'bg-blue-500/20 text-blue-300' 
                    : 'bg-green-500/20 text-green-300'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 pr-24 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 mb-4">{project.period}</p>
                <p className="text-white/70 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/70 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View on GitHub</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-white/70 mb-8">
            Want to see more? Check out my GitHub profile for additional projects and contributions.
          </p>
          <motion.a
            href="https://github.com/ShashikaEkanayaka"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
