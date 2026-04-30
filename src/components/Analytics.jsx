import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './Analytics.css'

const Analytics = () => {
  const skillsData = [
    { name: 'Python', proficiency: 95, projects: 42 },
    { name: 'SQL', proficiency: 92, projects: 38 },
    { name: 'Tableau', proficiency: 88, projects: 31 },
    { name: 'ML', proficiency: 85, projects: 18 },
    { name: 'React', proficiency: 80, projects: 12 },
  ]

  const experienceData = [
    { month: 'Jan', completedProjects: 2, learningHours: 40 },
    { month: 'Feb', completedProjects: 3, learningHours: 45 },
    { month: 'Mar', completedProjects: 4, learningHours: 50 },
    { month: 'Apr', completedProjects: 5, learningHours: 55 },
    { month: 'May', completedProjects: 6, learningHours: 60 },
    { month: 'Jun', completedProjects: 7, learningHours: 65 },
  ]

  const projectDistribution = [
    { name: 'Analytics', value: 35, color: '#6366f1' },
    { name: 'ML/AI', value: 25, color: '#8b5cf6' },
    { name: 'Web Dev', value: 20, color: '#ec4899' },
    { name: 'Other', value: 20, color: '#06b6d4' },
  ]

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: '📊' },
    { label: 'Total Learning Hours', value: '2000+', icon: '⏱️' },
    { label: 'Repositories', value: '25+', icon: '📦' },
    { label: 'Certifications', value: '12', icon: '🏆' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="analytics" id="analytics">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Analytics & Insights</h2>
          <p className="section-description">
            Visual breakdown of my professional journey and growth metrics
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <motion.div
          className="charts-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Skills Chart */}
          <motion.div className="chart-container" variants={itemVariants}>
            <h3>Skill Proficiency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99, 102, 241, 0.1)" />
                <XAxis dataKey="name" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                  }}
                  cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }}
                />
                <Bar dataKey="proficiency" fill="var(--primary-color)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div className="chart-container" variants={itemVariants}>
            <h3>Professional Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={experienceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(99, 102, 241, 0.1)" />
                <XAxis dataKey="month" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="completedProjects"
                  stroke="var(--primary-color)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--primary-color)', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="learningHours"
                  stroke="var(--secondary-color)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--secondary-color)', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Project Distribution */}
          <motion.div className="chart-container" variants={itemVariants}>
            <h3>Project Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {projectDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Achievements */}
          <motion.div className="chart-container" variants={itemVariants}>
            <h3>Key Achievements</h3>
            <div className="achievements-list">
              <div className="achievement">
                <div className="achievement-icon">🎯</div>
                <div>
                  <h4>Data Pipeline Optimization</h4>
                  <p>Reduced processing time by 60% through ETL optimization</p>
                </div>
              </div>
              <div className="achievement">
                <div className="achievement-icon">📈</div>
                <div>
                  <h4>ML Model Accuracy</h4>
                  <p>Achieved 94% accuracy in customer churn prediction</p>
                </div>
              </div>
              <div className="achievement">
                <div className="achievement-icon">💡</div>
                <div>
                  <h4>Business Impact</h4>
                  <p>Generated $500k+ revenue insights through analysis</p>
                </div>
              </div>
              <div className="achievement">
                <div className="achievement-icon">🌟</div>
                <div>
                  <h4>Team Leadership</h4>
                  <p>Mentored 10+ junior data professionals</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Analytics
