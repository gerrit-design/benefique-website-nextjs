# QuickBooks OAuth - Vercel Deployment Guide

## ✅ What's Ready

OAuth routes are now in the Next.js app:
- `/api/oauth/start` - Initiates OAuth flow
- `/api/oauth/callback` - Handles the callback and displays tokens

## 🚀 Deploy to Vercel

### Option 1: Deploy via Git (Recommended)

```bash
cd /Users/gbrain/clawd/benefique-website-nextjs

# Commit the new OAuth routes
git add app/api/oauth/
git commit -m "Add QuickBooks OAuth endpoints"
git push
```

Vercel will auto-deploy if connected to your git repo.

### Option 2: Deploy via Vercel CLI

```bash
cd /Users/gbrain/clawd/benefique-website-nextjs

# Install Vercel CLI (if not already)
npm i -g vercel

# Deploy
vercel --prod
```

## 🔐 Configure Environment Variables

After deploying, add these to Vercel:

1. Go to: https://vercel.com/gerrit-design/benefique-website-nextjs/settings/environment-variables
   (or whatever your project is called)

2. Add these variables:
   - `QBO_CLIENT_ID` = `ABJmSAx2cGBvV8BcBl2f5XXe2w2XAs9sAGMx8uzgH4PG3dApTI`
   - `QBO_CLIENT_SECRET` = `Cgbut4JWUqgRprd3UcidUF48G9d013nVsCkbDSDJ`
   - `REDIRECT_URI` = `https://app.benefique.com/api/oauth/callback`

3. Redeploy after adding variables

## 🎯 Complete OAuth Flow

1. **Visit:** https://app.benefique.com/api/oauth/start
2. **Login** to QuickBooks and authorize
3. **Copy tokens** from the success page
4. **Add tokens to Vercel:**
   - `QBO_COMPANY_ID` = (from success page)
   - `QBO_ACCESS_TOKEN` = (from success page)
   - `QBO_REFRESH_TOKEN` = (from success page)

## 🔄 Update Intuit Redirect URI

Make sure your Intuit app has this redirect URI:
```
https://app.benefique.com/api/oauth/callback
```

(Note: `/api/` not just `/oauth/`)

## 🧪 Test Locally First (Optional)

```bash
cd /Users/gbrain/clawd/benefique-website-nextjs
npm run dev
# Visit http://localhost:3000/api/oauth/start
```

Note: Callback won't work locally since Intuit expects the production URL.

## ⚠️ Security Notes

- `.env.local` is gitignored - never commit it
- Add all secrets via Vercel dashboard, not in code
- Tokens expire after 1 hour
- Implement refresh logic in your main app

## 🔍 Check Current Vercel Config

```bash
# See what's deployed
vercel ls

# See environment variables
vercel env ls
```

## Need Help?

Run these to check status:
```bash
vercel --version  # Check if CLI is installed
git remote -v     # See if connected to Vercel via git
```
