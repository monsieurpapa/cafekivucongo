# Build & Deployment Guide

## Local Development

### Setup
\`\`\`bash
# Install dependencies
npm install

# Create environment file (optional, defaults work)
cp .env.example .env.local

# Start development server
npm run dev
\`\`\`

Development server runs at `http://localhost:3000`

### Development Commands
\`\`\`bash
# Start dev server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## Production Build

### Building
\`\`\`bash
npm run build
\`\`\`

The build process:
1. Compiles TypeScript
2. Bundles React components
3. Optimizes images
4. Generates sitemap
5. Creates production-optimized code

### Build Output
- `.next/`: Compiled Next.js application
- `.next/standalone`: Self-contained production build
- `public/`: Static assets (images, robots.txt, etc.)

### Local Production Testing
\`\`\`bash
npm run build
npm start
\`\`\`

Then visit `http://localhost:3000`

## Deployment Options

### Option 1: Vercel (Recommended)

#### Quick Deploy
\`\`\`bash
npm i -g vercel
vercel deploy --prod
\`\`\`

#### GitHub Integration (Auto-Deploy)
1. Push repository to GitHub
2. Connect GitHub to Vercel in dashboard
3. Automatic deployments on push to main branch

#### Manual Deploy via Dashboard
1. Go to https://vercel.com
2. Import project
3. Vercel auto-detects Next.js settings
4. Click "Deploy"

### Option 2: Self-Hosted

#### Docker (Recommended)
\`\`\`bash
docker build -t cafekivucongo .
docker run -p 3000:3000 cafekivucongo
\`\`\`

#### Traditional Node.js Server
\`\`\`bash
npm install
npm run build
npm start
\`\`\`

Set environment variables:
- NODE_ENV=production
- NEXT_PUBLIC_APP_URL=your-domain.com

## Optimization

### Image Optimization
- Automatic WebP/AVIF conversion
- Responsive image sizes
- Lazy loading by default
- Cache-busting with hash filenames

### Code Splitting
- Automatic route-based code splitting
- Dynamic imports for large components
- Tree-shaking unused code

### Caching
\`\`\`
Static content (images): 1 year
JavaScript: 1 week
HTML: No cache (revalidates)
\`\`\`

## Environment Variables

Required for production:
- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_URL=https://your-domain.com`

Optional:
- Analytics IDs
- Email service credentials
- Third-party API keys

**Never commit actual values to git!** Use `.env.local` for local development.

## Security

The build process ensures:
- No source maps in production (`productionBrowserSourceMaps: false`)
- Strict TypeScript checking
- Optimized bundle size
- Security headers configured

## Monitoring Build

### Build Time
- Typical: 2-3 minutes
- Optimized: Can be reduced with caching

### Build Size
- JavaScript: ~150KB (gzipped)
- CSS: ~50KB (gzipped)
- HTML: ~30KB per page (gzipped)

### Common Build Issues

**Issue**: Build fails with TypeScript errors
- Solution: Check `tsconfig.json` or disable with `typescript.ignoreBuildErrors`

**Issue**: Image optimization fails
- Solution: Ensure images are in `public/` folder

**Issue**: Static generation takes too long
- Solution: Increase ISR revalidation time

## CI/CD Integration

### GitHub Actions Example
\`\`\`yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
\`\`\`

## Performance Metrics

Track these metrics in production:
- Lighthouse score (target: 90+)
- Core Web Vitals
- Page load time
- Error rate
- Build duration

## Rollback

### Vercel Rollback
1. Go to Deployments in Vercel dashboard
2. Find previous deployment
3. Click "Promote to Production"

### Git Rollback
\`\`\`bash
git revert <commit-hash>
git push origin main
\`\`\`

## Support

For build issues:
- Check Next.js documentation: https://nextjs.org/docs
- View build logs in Vercel dashboard
- Check GitHub Issues for known problems
