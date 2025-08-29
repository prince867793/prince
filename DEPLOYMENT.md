# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository
```bash
git add .
git commit -m "feat: initial portfolio setup"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Configure environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
6. Deploy!

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update OpenGraph URLs in `src/app/layout.tsx`

## 🗄️ Supabase Setup

### Step 1: Create Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for setup to complete

### Step 2: Set Up Database
1. Go to SQL Editor
2. Copy and paste content from `supabase-schema.sql`
3. Run the SQL commands

### Step 3: Get Credentials
1. Go to Settings → API
2. Copy your Project URL and anon public key
3. Add to environment variables

## 📧 Gmail Configuration

### Step 1: Enable 2FA
1. Go to Google Account settings
2. Security → 2-Step Verification
3. Enable if not already enabled

### Step 2: Create App Password
1. Go to Security → 2-Step Verification → App passwords
2. Select "Mail" as the app
3. Generate password
4. Copy the 16-character password

### Step 3: Add to Environment
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=xxxx-xxxx-xxxx-xxxx
```

## 🎯 SEO Optimization

### Update Meta Tags
In `src/app/layout.tsx`, update:
- Title and description
- OpenGraph URLs
- Twitter card info

### Add Your CV
1. Add your CV PDF to `public/cv/Prince-Kumar-CV.pdf`
2. Or update the filename in `HeroSection.tsx`

### Google Analytics (Optional)
Add Google Analytics tracking in `layout.tsx`:
```tsx
import Script from 'next/script'

// Add in <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## 🔧 Performance Optimization

### Image Optimization
- Add project screenshots to `public/projects/`
- Use Next.js Image component for optimization

### Font Loading
- Fonts are already optimized with `next/font`
- Consider self-hosting for better performance

### Bundle Analysis
```bash
npm install @next/bundle-analyzer
```

## 🚨 Security Checklist

- [ ] Environment variables set correctly
- [ ] Supabase RLS policies enabled
- [ ] Email credentials secured
- [ ] No sensitive data in client-side code
- [ ] HTTPS enabled (automatic with Vercel)

## 📊 Monitoring

### Vercel Analytics
- Enable in Vercel dashboard
- Monitor performance and usage

### Supabase Monitoring
- Check database usage
- Monitor API calls
- Set up alerts for high usage

## 🔄 Updates

### Keep Dependencies Updated
```bash
pnpm update
```

### Monitor Security
```bash
pnpm audit
```

## 🆘 Troubleshooting

### Common Issues
1. **Environment variables not working**: Check spelling and restart dev server
2. **Supabase connection failed**: Verify URL and key
3. **Email not sending**: Check Gmail app password
4. **Build errors**: Run `pnpm build` locally first

### Debugging
- Check Vercel deployment logs
- Use browser developer tools
- Check Supabase logs

## 📞 Support

If you need help:
1. Check the [README.md](./README.md)
2. Review Next.js documentation
3. Check Supabase documentation
4. Contact: princekumar205086@gmail.com