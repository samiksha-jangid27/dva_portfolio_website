import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="greeting">
            <span className="greeting-emoji">👋</span>
            <span>Welcome to my digital portfolio</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Samiksha Jangid
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Data Analyst · Visualization Specialist
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            I build dashboards that make data feel simple — fast to scan, hard to misread.
            Transforming raw data into compelling visual stories through end-to-end analytics pipelines.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-cta">
            <button className="btn btn-primary">
              <a href="#projects">View My Work</a>
            </button>
            <button className="btn btn-secondary">
              <a href="#contact">Get In Touch</a>
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="social-links">
            <motion.a
              href="https://github.com/samiksha-jangid27"
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/samiksha-jangid/"
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href="mailto:samikshajangid30@gmail.com"
              className="social-link"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="floating-card card-1">
            <span className="card-label">Data</span>
            <div className="chart-mini"></div>
          </div>
          <div className="floating-card card-2">
            <span className="card-label">Analytics</span>
            <div className="chart-mini"></div>
          </div>
          <div className="floating-card card-3">
            <span className="card-label">Insights</span>
            <div className="chart-mini"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown />
      </motion.div>
    </section>
  )
}

export default Hero
