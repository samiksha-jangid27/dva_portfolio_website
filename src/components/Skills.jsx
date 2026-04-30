import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Languages',
      skills: ['Python', 'SQL', 'JavaScript', 'HTML/CSS', 'R'],
      color: 'primary',
    },
    {
      name: 'Data Tools',
      skills: ['Tableau', 'Power BI', 'Excel', 'Google Analytics', 'Looker'],
      color: 'secondary',
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'BigQuery'],
      color: 'accent',
    },
    {
      name: 'ML & Analytics',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'Statistics'],
      color: 'primary',
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'Jupyter', 'VS Code', 'AWS', 'Google Cloud'],
      color: 'secondary',
    },
    {
      name: 'Frameworks',
      skills: ['React', 'Flask', 'Django', 'REST APIs', 'Apache Spark'],
      color: 'accent',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  }

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-description">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`skill-category category-${category.color}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3>{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="proficiency-section"
        >
          <h3 className="proficiency-title">Proficiency Levels</h3>
          <div className="proficiency-chart">
            {[
              { skill: 'Python & SQL', level: 95 },
              { skill: 'Data Visualization', level: 90 },
              { skill: 'Analytics & BI', level: 88 },
              { skill: 'Machine Learning', level: 85 },
              { skill: 'Web Development', level: 80 },
              { skill: 'Cloud Platforms', level: 78 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="proficiency-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="proficiency-label">
                  <span>{item.skill}</span>
                  <span className="proficiency-percentage">{item.level}%</span>
                </div>
                <div className="proficiency-bar">
                  <motion.div
                    className="proficiency-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
