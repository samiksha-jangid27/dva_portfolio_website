import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Telecom Analytics Dashboard',
      description: 'Comprehensive customer churn analysis for Indian telecom sector using 240k+ customer records. Built interactive Tableau dashboards revealing key churn drivers.',
      tags: ['Tableau', 'SQL', 'Python', 'Data Analysis'],
      image: '📊',
      stats: '240K+ Records',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'E-commerce Customer Segmentation',
      description: 'ML-powered customer segmentation using RFM analysis and clustering algorithms. Segmented 50k+ customers for targeted marketing campaigns.',
      tags: ['Python', 'ML', 'Pandas', 'Scikit-learn'],
      image: '🎯',
      stats: '50K+ Customers',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Real-time Sales Analytics ETL',
      description: 'End-to-end ETL pipeline ingesting real-time sales data from multiple sources into data warehouse. Automated daily reports with 99.5% uptime.',
      tags: ['Python', 'ETL', 'PostgreSQL', 'Airflow'],
      image: '⚙️',
      stats: 'Real-time Processing',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Stock Market Prediction Model',
      description: 'LSTM-based time series forecasting model for stock price prediction achieving 82% accuracy. Integrated with interactive visualization dashboard.',
      tags: ['TensorFlow', 'LSTM', 'Time Series', 'Python'],
      image: '📈',
      stats: '82% Accuracy',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Healthcare Data Insights Platform',
      description: 'Built Power BI platform analyzing patient records and hospital operations. Identified optimization opportunities saving 15% operational costs.',
      tags: ['Power BI', 'SQL', 'Healthcare', 'Analytics'],
      image: '🏥',
      stats: '15% Cost Saving',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Social Media Sentiment Analysis',
      description: 'NLP pipeline analyzing 100k+ tweets for brand sentiment. Real-time monitoring dashboard with trend predictions.',
      tags: ['NLP', 'Python', 'Tweet Data', 'Visualization'],
      image: '💬',
      stats: '100K+ Tweets',
      link: '#',
      github: '#',
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
