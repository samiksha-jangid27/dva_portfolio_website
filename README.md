# Data & Visual Analytics Portfolio - Samiksha Jangid

A modern, interactive portfolio website showcasing data visualization, analytics expertise, and professional projects. Built with React, Vite, and cutting-edge web technologies.

## 🚀 Features

### ✨ Modern Design
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Eye-friendly dark interface with gradient accents
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Interactive Components**: Hover effects and smooth transitions throughout

### 📊 Data Visualization
- **Interactive Charts**: Bar charts, line graphs, and pie charts using Recharts
- **Analytics Dashboard**: Real-time statistics and metrics display
- **Project Showcase**: 6+ featured data projects with detailed descriptions
- **Skill Proficiency**: Visual representation of technical expertise levels

### 🎯 Key Sections

1. **Hero Section**
   - Animated greeting and introduction
   - Call-to-action buttons
   - Social media links
   - Floating card animations

2. **About Section**
   - Professional background
   - Key competencies
   - Feature cards highlighting expertise

3. **Skills & Expertise**
   - 6 skill categories (Languages, Data Tools, Databases, ML, Tools, Frameworks)
   - Interactive skill tags
   - Proficiency level indicators with animated bars

4. **Featured Projects**
   - 6 showcase projects with real data metrics
   - Project descriptions and tech stack
   - Links to project demos and GitHub repositories
   - Hover animations and project cards

5. **Analytics Dashboard**
   - Skill proficiency bar chart
   - Professional growth timeline
   - Project distribution pie chart
   - Key achievements section
   - Performance metrics and statistics

6. **Contact Section**
   - Contact information with icons
   - Social media links
   - Interactive contact form
   - Email, phone, and location details

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - UI library
- **Vite 8** - Lightning-fast build tool

### Styling & Animation
- **CSS3** - Custom styling with CSS variables
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - SVG icon library

### Data Visualization
- **Recharts** - Interactive charting library
- Custom CSS animations and graphics

### Development Tools
- **Node.js & npm** - Package management
- **Git** - Version control

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/samiksha-jangid27/dva_portfolio_website.git
cd dva_portfolio_website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The site will open at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
```

Production files will be in the `dist/` directory.

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
dva_portfolio_website/
├── index.html              # Main HTML entry point
├── public/                 # Static assets
├── src/
│   ├── main.jsx            # React application entry
│   ├── App.jsx             # Main App component
│   ├── index.css           # Global styles
│   └── components/
│       ├── Navigation.jsx   # Navigation bar
│       ├── Hero.jsx         # Hero/Landing section
│       ├── About.jsx        # About me section
│       ├── Skills.jsx       # Skills showcase
│       ├── Projects.jsx     # Featured projects
│       ├── Analytics.jsx    # Analytics dashboard
│       ├── Contact.jsx      # Contact form & info
│       └── *.css            # Component styles
├── vite.config.js          # Vite configuration
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
└── dist/                   # Built output (after build)
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... more colors */
}
```

### Content
- Update hero content in `src/components/Hero.jsx`
- Modify project data in `src/components/Projects.jsx`
- Edit skills in `src/components/Skills.jsx`
- Change contact info in `src/components/Contact.jsx`

### Add New Sections
1. Create new component in `src/components/`
2. Create corresponding CSS file
3. Import and add to `src/App.jsx`

## 📊 Featured Projects Included

1. **Telecom Analytics Dashboard** - Customer churn analysis
2. **E-commerce Segmentation** - Customer segmentation with ML
3. **Real-time Sales ETL** - Data pipeline automation
4. **Stock Market Prediction** - LSTM time series forecasting
5. **Healthcare Insights** - Hospital operations analytics
6. **Social Media Sentiment** - NLP and trend analysis

## 🔗 Live Demo & Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
1. Update `vite.config.js`:
```javascript
export default {
  base: '/dva_portfolio_website/'
}
```

2. Build and deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push
```

### Deploy to Netlify
Connect your GitHub repo directly to Netlify for automatic deployments.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- **Optimized Build**: 753KB total (230KB gzipped)
- **Fast Load Time**: Leverages Vite's instant HMR
- **SEO Friendly**: Semantic HTML structure
- **Accessibility**: WCAG compliant components

## 📝 Git Commit History

The repository includes meaningful commits for each feature:
- Initial React project setup with Vite
- Component development and styling
- Analytics dashboard integration
- Build configuration and optimization

## 🤝 Contributing

Feel free to fork this project and adapt it for your own portfolio!

## 📞 Contact

- **Email**: jindalgauri244@gmail.com
- **Phone**: +91 7017115481
- **GitHub**: [@samiksha-jangid27](https://github.com/samiksha-jangid27)
- **LinkedIn**: [Gauri Jindal](https://linkedin.com/in/gauri-jindal)
- **Location**: Ghaziabad, India

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ by Samiksha Jangid**
