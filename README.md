# Cafe Kivu Congo - Coffee Transformation Business Website

A modern, fully internationalized (English/French) website for Cafe Kivu Congo, a professional coffee transformation business based in Goma, Democratic Republic of Congo.

## Features

- **Bilingual Support**: Full English and French translations with automatic language detection
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Light/Dark Mode**: Theme switcher with system preference detection
- **SEO Optimized**: Comprehensive SEO features including sitemap and robots.txt
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Next.js 15.5.9 with optimized images and code splitting
- **Coffee-Inspired Design**: Natural green and brown color palette reflecting coffee origin and roasting

## Sections

1. **Hero Section**: Eye-catching introduction with auto-scrolling image carousel
2. **Services**: Bean sourcing, roasting, packaging, entreposage, decorticage, sorting, exportation
3. **Equipment**: Modern processing facility showcase
4. **Process**: Interactive step-by-step coffee transformation visualization
5. **Specialties**: Advanced coffee processing services
6. **Partners**: Auto-scrolling carousel featuring key industry partners
7. **Testimonials**: Client success stories and case studies
8. **Pricing**: Flexible plans for different business needs
9. **Investment**: Founder video call for investment opportunities
10. **Contact**: Professional contact form with validation
11. **About**: Company mission, values, and team
12. **Facilities**: Photo gallery of processing facilities

## Tech Stack

- **Framework**: Next.js 15.5.9
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4 with custom coffee theme
- **Animation**: Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Internationalization**: Custom middleware with language detection
- **Theme**: next-themes with system preference support
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the development version.

### Environment Variables

See `.env.example` for available configuration options. Currently, all features work with default settings.

## Production Deployment

### Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Using Vercel CLI
vercel deploy --prod

# Or directly from GitHub
# Push to main branch and Vercel will auto-deploy
```

The site is configured for automatic deployment via Vercel with the following settings:
- Build command: `next build`
- Output directory: `.next`
- Environment: Production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

The website meets WCAG 2.1 Level AA accessibility standards:
- Keyboard navigation support
- Screen reader compatibility
- Proper color contrast ratios
- ARIA labels and roles
- Focus indicators
- Skip navigation links

## Performance

- Optimized images with WebP format support
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Font optimization
- Automatic sitemap generation
- SEO-friendly meta tags

## SEO

- Dynamic meta tags for all pages
- Sitemap.xml auto-generation
- Robots.txt configuration
- Open Graph and Twitter Card support
- Canonical URLs
- Language alternates
- Structured data ready

## Security

- Security headers configured (X-Content-Type-Options, X-Frame-Options, etc.)
- No sensitive data in client-side code
- Input validation on all forms
- CSRF protection
- Content Security Policy ready

## Contact & Support

For inquiries about the business, visit the contact section on the website.

**Address**: Goma, Q. Bujovu, AvenueaNyakagozi, Goma, Nord-Kivu, Republic Democratique du Congo

**Phone**: +243 997675176

**Email**: cafekivucongo8@gmail.com

**Facebook**: https://www.facebook.com/share/1EcZk2kj21/

## License

All rights reserved © 2024 Cafe Kivu Congo
