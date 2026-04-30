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
      description: 'Intelligent Agentic AI system predicting EV charging demand with LangGraph workflow, FAISS RAG retrieval, and Groq LLM reasoning. ML pipeline with 69% R² (4.13 kWh MAE), hotspot detection, and optimized infrastructure planning deployed on Streamlit.',
      tags: ['LangGraph', 'Scikit-learn', 'FAISS', 'Groq LLM', 'Streamlit', 'Python'],
      image: '⚡',
      stats: 'R² 0.69',
      link: 'https://ev-charging-demand-prediction-saamcexbagk7gmpmdfotqd.streamlit.app/',
      github: 'https://github.com/S-h-u-b-h-1/EV-charging-demand-prediction',
    },
    {
      id: 2,
      title: 'Indian Banking Stock Market Analysis',
      description: 'Risk-return analysis of 5 major Indian banking stocks (SBI, ICICI, HDFC, Axis, Kotak) over 5 years. SBI delivered 180% returns. Built dashboard with KPI framework, volatility clustering, volume-momentum signals, and seasonal pattern analysis.',
      tags: ['Excel', 'Pivot Tables', 'Data Visualization', 'Financial Analysis'],
      image: '📈',
      stats: '180% Return',
      link: 'https://github.com/samiksha-jangid27/Stock_Market_Analysis',
      github: 'https://github.com/samiksha-jangid27/Stock_Market_Analysis',
    },
    {
      id: 3,
      title: 'Telecom Customer Churn Analytics',
      description: 'End-to-end analytics pipeline analyzing 243,553 telecom customers across 4 operators (Airtel, Jio, Vodafone, BSNL) across 28 states. Identified 20.05% churn rate drivers through statistical analysis, EDA, and built 4-view Tableau dashboard with actionable retention strategies.',
      tags: ['Python', 'Tableau', 'SQL', 'Statistical Analysis', 'ETL'],
      image: '📊',
      stats: '243K+ Records',
      link: 'https://public.tableau.com/views/Telecom_analysis_17774577765420/Dashboard3?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      github: 'https://github.com/samiksha-jangid27/SectionC_G5_Telecom_Analytics',
    },
    {
      id: 4,
      title: 'Advanced Data Visualization Portfolio',
      description: 'Modern React-based portfolio website featuring interactive dashboards, animated data visualizations, and real-time analytics. Built with Framer Motion, Recharts, and Vite for optimal performance and user experience.',
      tags: ['React', 'Vite', 'Recharts', 'Framer Motion', 'JavaScript'],
      image: '🎨',
      stats: 'Responsive Design',
      link: '#',
      github: 'https://github.com/samiksha-jangid27',
    },
    {
      id: 5,
      title: 'Statistical Analysis & Hypothesis Testing',
      description: 'Comprehensive statistical analysis including t-tests, chi-square tests, correlation analysis, and regression models. Applied advanced techniques for deriving business insights from complex datasets.',
      tags: ['Statistics', 'Python', 'SciPy', 'Statsmodels', 'NumPy'],
      image: '📉',
      stats: 'Advanced Analytics',
      link: '#',
      github: 'https://github.com/samiksha-jangid27',
    },
    {
      id: 6,
      title: 'Data ETL & Wrangling Pipeline',
      description: 'Scalable ETL processes for data extraction, transformation, and loading. Handles missing values, data preprocessing, normalization, and quality validation for large-scale datasets with comprehensive error handling.',
      tags: ['Pandas', 'Python', 'ETL', 'Data Cleaning', 'Quality Assurance'],
      image: '⚙️',
      stats: 'Production-Ready',
      link: '#',
      github: 'https://github.com/samiksha-jangid27',
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
