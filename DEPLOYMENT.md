# Deployment Guide

## Quick Start - Deploy Your Portfolio

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the project
   - Click "Deploy"

Vercel will automatically build and deploy your site. Your portfolio will be live at a URL like `https://dva-portfolio.vercel.app`

### Option 2: Netlify

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

Your site will be live in minutes!

### Option 3: GitHub Pages

1. **Update package.json**
```json
{
  "homepage": "https://yourusername.github.io/dva_portfolio_website"
}
```

2. **Update vite.config.js**
```javascript
export default {
  base: '/dva_portfolio_website/'
}
```

3. **Build and deploy**
```bash
npm run build
cd dist
echo "your-domain.com" > CNAME  # Optional: for custom domain
git init
git add .
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/yourusername/dva_portfolio_website.git
git push -u origin main:gh-pages
```

### Option 4: Self-Hosted (AWS, DigitalOcean, etc.)

1. **Build the project**
```bash
npm run build
```

2. **Upload `dist` folder to your server**
   - Use FTP, SSH, or your hosting provider's dashboard
   - Configure your server to serve static files
   - Point your domain to the server

3. **Setup HTTPS** (optional but recommended)
   - Use Let's Encrypt for free SSL certificate

## Custom Domain

### Using Vercel
1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records according to Vercel's instructions

### Using Netlify
1. In Netlify Dashboard → Domain Settings
2. Add your custom domain
3. Update DNS records

### Using GitHub Pages
1. Update `CNAME` file with your domain
2. Update DNS `CNAME` record to point to `username.github.io`

## Performance Optimization

### Before Deployment
1. Run build: `npm run build`
2. Check bundle size in console output
3. Test with: `npm run preview`

### Monitor Performance
- Use [PageSpeed Insights](https://pagespeed.web.dev)
- Check [GTmetrix](https://gtmetrix.com)
- Monitor in browser DevTools

## Environment Variables (If Needed)

Create `.env` file in root:
```
VITE_API_URL=https://api.example.com
VITE_PUBLIC_KEY=your_key_here
```

Access in React:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Troubleshooting

### Port Already in Use
```bash
lsof -i :3000  # Check what's using port
kill -9 <PID>  # Kill the process
```

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS Not Loading
- Check file paths in imports
- Ensure all CSS files exist
- Clear browser cache (Cmd+Shift+R)

## Advanced Optimization

### Code Splitting
Vite automatically code-splits React components. For manual chunks:
```javascript
// In vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'charts': ['recharts']
        }
      }
    }
  }
}
```

### Image Optimization
- Use WebP format when possible
- Compress images before adding
- Use tools like TinyPNG or ImageOptim

### Lazy Loading Components
```javascript
import { lazy, Suspense } from 'react'

const Analytics = lazy(() => import('./components/Analytics'))

<Suspense fallback={<div>Loading...</div>}>
  <Analytics />
</Suspense>
```

## Maintenance

### Regular Updates
```bash
npm outdated           # Check for updates
npm update            # Update packages
npm audit            # Check for vulnerabilities
npm audit fix        # Fix vulnerabilities
```

### Backup
```bash
git commit -m "Pre-deployment backup"
git push origin main
```

---

Your portfolio is now deployed! 🎉

For questions or issues, check the main README.md or reach out on GitHub.
