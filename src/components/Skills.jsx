import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Programming',
      skills: ['Python', 'SQL', 'JavaScript'],
    },
    {
      name: 'Visualization',
      skills: ['Tableau', 'Excel', 'Recharts'],
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      name: 'Data Tools',
      skills: ['Pandas', 'NumPy', 'Scikit-learn'],
    },
    {
      name: 'ML & Stats',
      skills: ['Regression', 'Classification', 'Hypothesis Testing'],
    },
    {
      name: 'Tools',
      skills: ['Git', 'Jupyter', 'Streamlit'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
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
          <h2 className="section-title">Skills</h2>
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
              className="skill-category"
              variants={itemVariants}
            >
              <h3>{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
