# Deployment Guide

## Pre-Deployment Checklist

- [x] All pages tested locally
- [x] Responsive design verified
- [x] Build succeeds without errors
- [x] TypeScript compilation clean
- [x] 404 error page working
- [x] All links functional

## Deployment Options

### Option 1: Vercel (Easiest)

```bash
npm i -g vercel
vercel
```

Benefits: Zero config, automatic deployments on git push, free tier available

### Option 2: Self-Hosted (Node.js)

```bash
npm run build
npm run start
```

Benefits: Full control, can host anywhere Node.js runs

### Option 3: Static Export

Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
};
```

Then deploy `out/` folder to any static host (Netlify, GitHub Pages, etc.)

## Environment Setup

No environment variables required for basic deployment.

Optional for future features:
```bash
NEXT_PUBLIC_SITE_URL=https://nationalepayment.com
NEXT_PUBLIC_CONTACT_EMAIL=support@nationalepayment.com
```

## Post-Deployment

- [ ] Test all pages on live domain
- [ ] Verify responsive design on mobile
- [ ] Check analytics are working
- [ ] Set up SSL certificate (if self-hosted)
- [ ] Configure domain DNS

## Performance Optimization

### Image Optimization
Next.js automatically optimizes images. Ensure all images are placed in `public/` and use the `<Image>` component from `next/image`.

### Font Optimization
Fonts are pre-loaded via `next/font` in `BaseLayout.tsx`. No additional config needed.

### Code Splitting
Next.js automatically code-splits at route boundaries. Dynamic imports available for components:

```typescript
const Component = dynamic(() => import('./Component'), { loading: () => <div>Loading...</div> });
```

### Static Generation
All pages are pre-rendered at build time using `getStaticProps` and `getStaticPaths` patterns.

## Monitoring

After deployment, monitor:
- Page load times (aim for < 2s)
- Core Web Vitals (LCP, FID, CLS)
- Error rates in production
- User engagement metrics

## Rollback

If issues occur:

```bash
# Vercel: Automatic rollback from dashboard
# Self-Hosted: Deploy previous build or revert git commit
git revert <commit-hash>
npm run build
npm run start
```
