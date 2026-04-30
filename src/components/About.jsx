import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiTrendingUp, FiTarget } from 'react-icons/fi'
import './About.css'

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const features = [
    {
      icon: <FiCode />,
      title: 'Data Engineering',
      description: 'Building robust ETL pipelines and databases with Python and SQL for seamless data flow.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Analytics & BI',
      description: 'Creating interactive dashboards and visualizations in Tableau, Power BI, and custom tools.',
    },
    {
      icon: <FiTarget />,
      title: 'Insights Delivery',
      description: 'Translating complex data into actionable insights that drive business decisions.',
    },
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            ML Engineer & Data Visualization Specialist at Newton School of Technology
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="about-text"
          >
            <p>
              I'm a passionate data professional with expertise in transforming raw data into meaningful insights.
              With a strong foundation in Python, SQL, and advanced analytics, I specialize in building end-to-end
              data solutions that drive business value.
            </p>
            <p>
              My journey in data analytics has equipped me with the skills to design complex data pipelines,
              develop insightful dashboards, and communicate findings to stakeholders. I believe in the power of
              data-driven decision making and the importance of clear visualization in telling data stories.
            </p>
            <p>
              When I'm not diving into data, you'll find me exploring new technologies, contributing to open-source
              projects, or mentoring aspiring data professionals.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } },
                }}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
