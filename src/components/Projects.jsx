import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'ChargeSense: EV Charging Demand Prediction',
      description: 'Agentic AI system predicting EV charging demand using LangGraph, FAISS RAG, and Groq LLM. 69% R² accuracy with hotspot detection and infrastructure optimization.',
      tags: ['LangGraph', 'Scikit-learn', 'FAISS', 'Streamlit'],
      image: '⚡',
      link: 'https://ev-charging-demand-prediction-saamcexbagk7gmpmdfotqd.streamlit.app/',
      github: 'https://github.com/S-h-u-b-h-1/EV-charging-demand-prediction',
    },
    {
      id: 2,
      title: 'Banking Stock Market Analysis',
      description: 'Risk-return analysis of 5 major Indian banking stocks. SBI delivered 180% returns with volume-momentum signal accuracy of 78%.',
      tags: ['Excel', 'Financial Analysis', 'Data Visualization'],
      image: '📈',
      link: 'https://github.com/samiksha-jangid27/Stock_Market_Analysis',
      github: 'https://github.com/samiksha-jangid27/Stock_Market_Analysis',
    },
    {
      id: 3,
      title: 'Telecom Customer Churn Analytics',
      description: 'Analyzed 243K+ telecom customers across 4 operators. Built Tableau dashboard identifying 20.05% churn drivers with actionable retention strategies.',
      tags: ['Python', 'Tableau', 'SQL', 'Statistical Analysis'],
      image: '📊',
      link: 'https://public.tableau.com/views/Telecom_analysis_17774577765420/Dashboard1',
      github: 'https://github.com/samiksha-jangid27/SectionC_G5_Telecom_Analytics',
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Showcasing data-driven solutions that deliver real-world impact
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
            >
              <div className="project-header">
                <div className="project-image">{project.image}</div>
                <div className="project-stat">{project.stats}</div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.link}
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink /> View Project
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="project-link github"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
