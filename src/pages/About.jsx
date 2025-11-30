import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { pageTransition, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const skills = {
    'Programming': ['Java', 'C++', 'C#', 'JavaScript', 'SQL', 'Scala', 'R'],
    'Frontend': ['React', 'React Native', 'Tailwind', 'Bootstrap', 'Material UI', 'Flutter'],
    'Backend': ['Spring Boot', 'Node.js', 'Express'],
    'Databases': ['MySQL', 'MongoDB', 'PostgreSQL'],
    'DevOps & Cloud': ['AWS', 'Azure', 'Docker', 'Git', 'Linux'],
    'Networking': ['TCP/IP', 'DNS', 'CCNA'],
  };

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Intendable',
      period: 'Jan 2025 – Present',
      type: 'Volunteer Intern',
      description: [
        'Developed cross-platform restaurant rating app using React Native and Spring Boot',
        'Implemented secure authentication and analytics with PostgreSQL',
        'Collaborated via GitHub workflows ensuring scalable backend services',
      ]
    }
  ];

  const certifications = [
    'CCNA: Enterprise Networking, Security, and Automation (ENSA)',
    'AWS Cloud Technical Essentials',
    'Microsoft Azure Fundamentals',
    'Artificial Intelligence Fundamentals',
    'AI Engineering Essentials',
    'Cisco Certified Support Technician (In Progress)'
  ];

  const leadership = [
    'President – Student Union, UCSC (2024–2025)',
    'Microsoft Learn Student Ambassador',
    'Co-Director – Rotaract UCSC',
    'Baseball Player – University of Colombo Team'
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
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Computer Science undergraduate at UCSC passionate about Software Engineering, System Engineering, 
            Fullstack Development, and Machine Learning.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            A proactive and adaptable leader with a positive attitude and strong team spirit. 
            I'm passionate about continuous learning and driven by curiosity, especially in exploring 
            and applying new technologies.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            Recognized for a growth mindset, resilience, and the ability to inspire and collaborate 
            effectively to achieve shared goals. Currently pursuing B.Sc. (Hons) in Computer Science 
            at the University of Colombo School of Computing.
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-8 mb-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">{exp.title}</h3>
                  <p className="text-xl text-white/80">{exp.company}</p>
                  <p className="text-sm text-white/60">{exp.type}</p>
                </div>
                <span className="text-white/60 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-white/70 flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="glass-dark rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="glass rounded-xl p-4 flex items-center"
              >
                <span className="text-blue-400 mr-3 text-2xl">✓</span>
                <span className="text-white/80">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Leadership & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadership.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                whileHover={{ scale: 1.03 }}
                className="glass-dark rounded-xl p-6 flex items-center"
              >
                <span className="text-purple-400 mr-3 text-2xl">★</span>
                <span className="text-white/80">{activity}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
