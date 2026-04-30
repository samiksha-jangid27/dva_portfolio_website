import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">SJ</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="nav-link"
              whileHover={{ color: 'var(--primary-color)' }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="mobile-link"
            onClick={() => setIsOpen(false)}
            whileHover={{ x: 10 }}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navigation
