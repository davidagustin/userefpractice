# Deployment Guide

This guide will help you deploy the React useRef Examples application to Vercel.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy with Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy to production:**
   ```bash
   npm run deploy
   ```
   Or for a preview deployment:
   ```bash
   npm run deploy:preview
   ```

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: add comprehensive useRef examples"
   git branch -M main
   git remote add origin https://github.com/yourusername/userefpractice.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Click "New Project"** and select your repository

4. **Configure project settings:**
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

5. **Click "Deploy"** - Vercel will automatically build and deploy your app

### Option 3: Deploy via Vercel Dashboard

1. **Zip your project** (excluding `node_modules` and `.git` folders)

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "New Project"** → "Upload Template"

4. **Upload your zip file**

5. **Configure settings** and click "Deploy"

## 🔧 Environment Variables

This application doesn't require any environment variables for basic functionality. However, if you add features that need API keys or other secrets, you can configure them in the Vercel dashboard:

1. Go to your project in Vercel dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables (e.g., `NEXT_PUBLIC_API_URL`)

## 📊 Performance Optimization

The application is already optimized for Vercel deployment:

- **Static Generation**: Pages are pre-rendered at build time
- **Image Optimization**: Uses Next.js Image component (when applicable)
- **Code Splitting**: Automatic code splitting by Next.js
- **Caching**: Optimized caching headers in `vercel.json`

## 🌍 Custom Domain (Optional)

To add a custom domain:

1. Go to your project in Vercel dashboard
2. Navigate to Settings → Domains
3. Add your domain and follow the DNS configuration instructions

## 📈 Analytics (Optional)

To add Vercel Analytics:

1. Go to your project in Vercel dashboard
2. Navigate to Settings → Analytics
3. Enable Vercel Analytics
4. Add the tracking code to your app

## 🔄 Continuous Deployment

With GitHub integration, your app will automatically redeploy when you push changes to your main branch.

## 🐛 Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`
- Verify the build locally: `npm run build`

### Runtime Errors
- Check the Vercel function logs in the dashboard
- Verify environment variables are set correctly
- Test locally first: `npm run dev`

### Performance Issues
- Check the Vercel Analytics for performance metrics
- Optimize images and assets
- Consider using Next.js Image component for images

## 📞 Support

If you encounter issues:

1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Review the [Next.js Documentation](https://nextjs.org/docs)
3. Check the Vercel community forums
4. Contact Vercel support if needed

---

**Your useRef Examples app is now live!** 🎉

Share the URL with others to demonstrate the power of React useRef and DOM manipulation.
