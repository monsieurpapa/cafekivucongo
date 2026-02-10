# Quick Deployment Guide - Cafe Kivu Congo Website

## 🚀 Ready to Launch!

Your website is fully production-ready. Follow these steps to deploy.

## Option 1: Deploy to Vercel (Recommended)

Vercel is the platform built by the creators of Next.js. It's the easiest option.

### Step 1: Install Vercel CLI
\`\`\`bash
npm i -g vercel
\`\`\`

### Step 2: Deploy
\`\`\`bash
vercel deploy --prod
\`\`\`

Or directly from the browser:
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Click "Deploy"

Vercel will:
- Auto-detect Next.js configuration
- Build your site
- Deploy to production
- Provide a live URL

**Your site will be live in 2-3 minutes!**

---

## Option 2: Deploy to Netlify

### Step 1: Connect Repository
1. Go to https://netlify.com
2. Click "New site from Git"
3. Select your GitHub repository

### Step 2: Configure Build
- Build command: `npm run build`
- Publish directory: `.next`

Click "Deploy" and wait 2-3 minutes.

---

## Option 3: Deploy to AWS

### Using AWS Amplify
1. Go to AWS Amplify Console
2. Select "New App" > "Host Web App"
3. Choose GitHub
4. Select your repository
5. Configure build settings (auto-detected)
6. Deploy

---

## Option 4: Self-Hosted Deployment

### Using DigitalOcean, Linode, or Similar

#### Step 1: Deploy Node.js Application
\`\`\`bash
# Build the project
npm run build

# Start production server
npm start
\`\`\`

#### Step 2: Use PM2 for Process Management
\`\`\`bash
npm install -g pm2

# Start app with PM2
pm2 start npm --name "cafekivucongo" -- start

# Make it restart on reboot
pm2 startup
pm2 save
\`\`\`

#### Step 3: Set up Nginx as Reverse Proxy
\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

#### Step 4: Enable SSL (Free with Let's Encrypt)
\`\`\`bash
sudo certbot certonly --webroot -w /var/www/html -d your-domain.com
\`\`\`

---

## Domain Configuration

### Step 1: Buy a Domain
- Recommend: Namecheap, GoDaddy, or Domains.google

### Step 2: Point Domain to Vercel
If using Vercel, update your domain's DNS:

1. In Vercel dashboard: Settings > Domains
2. Add your domain
3. Update your registrar's nameservers to:
   \`\`\`
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   \`\`\`

Or point to Vercel IP (if A record):
\`\`\`
76.76.19.132
\`\`\`

### Step 3: Wait for DNS Propagation
Usually 24 hours, but can be instant.

---

## Environment Variables

### For Vercel

1. Go to Project Settings > Environment Variables
2. Add (optional, defaults work):
   - `NODE_ENV`: `production`
   - `NEXT_PUBLIC_APP_URL`: `https://your-domain.com`

### For Self-Hosted

Create `.env.production`:
\`\`\`
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
\`\`\`

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Homepage loads at https://your-domain.com
- [ ] Language switching works (EN/FR)
- [ ] Dark mode toggle works
- [ ] Contact form is functional
- [ ] Images load correctly
- [ ] Navigation menu responsive on mobile
- [ ] All pages accessible
- [ ] No console errors (F12 dev tools)

## Test URLs

After deployment, test these:
- https://your-domain.com (redirects to French)
- https://your-domain.com/en (English version)
- https://your-domain.com/fr (French version)
- https://your-domain.com/en/about (About page)
- https://your-domain.com/fr/about (À propos page)

---

## Performance Verification

### Check Performance
1. Visit https://pagespeed.web.dev/
2. Enter your deployed URL
3. Run analysis
4. Target: Score > 90

### View SEO
1. Visit https://www.seobility.net/
2. Enter your URL
3. Review SEO score
4. Target: > 80

---

## Monitoring After Deployment

### Set Up Error Alerts
For Vercel:
1. Project Settings > Integrations
2. Add error tracking service (Sentry, LogRocket)

### View Performance Metrics
1. Vercel Dashboard > Analytics
2. Monitor page load times
3. Track visitor locations

---

## Troubleshooting

### Site Won't Load
\`\`\`bash
# Check if build succeeds locally
npm run build
npm start

# Visit http://localhost:3000
\`\`\`

### Slow Performance
- Check Lighthouse score (https://pagespeed.web.dev/)
- Optimize images (already done)
- Check for large dependencies: `npm ls`

### Deployment Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are listed in package.json
- Run `npm install` locally to verify

### Domain Not Working
- DNS propagation takes up to 48 hours
- Check nameserver settings in registrar
- Use https://www.whatsmydns.net/ to check DNS

---

## Getting Help

### Documentation
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- React: https://react.dev

### Support Channels
- Vercel Support: https://vercel.com/support
- GitHub Issues: [Your Repository]
- Stack Overflow: Tag with `nextjs`

---

## Security Reminders

✅ Already configured:
- HTTPS/SSL enabled
- Security headers set
- Input validation on forms
- No hardcoded secrets

📋 To verify:
- Check SSL certificate: https://www.sslshopper.com/ssl-checker.html
- Security headers: https://securityheaders.com/

---

## Next Steps

1. **Deploy** - Choose option above (Vercel recommended)
2. **Test** - Verify all features work
3. **Monitor** - Watch performance metrics
4. **Update** - Keep dependencies current

---

## Contact for Business

- **Email**: cafekivucongo8@gmail.com
- **Phone**: +243 997675176
- **Location**: Goma, Nord-Kivu, DRC
- **Facebook**: https://www.facebook.com/share/1EcZk2kj21/

---

**Your website is production-ready. Deploy with confidence!** 🎉
