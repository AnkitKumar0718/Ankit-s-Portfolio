# Deployment Guide

## Part 1: Push to GitHub

1.  **Initialize Git** (if not already done):
    ```bash
    git init
    ```

2.  **Add your files**:
    ```bash
    git add .
    ```

3.  **Commit your changes**:
    ```bash
    git commit -m "Ready for deployment"
    ```

4.  **Create a Repository on GitHub**:
    *   Go to [GitHub.com/new](https://github.com/new).
    *   Name your repository (e.g., `my-portfolio`).
    *   Click **Create repository**.

5.  **Connect and Push**:
    *   Copy the commands under "...or push an existing repository from the command line". They will look like this:
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
    git push -u origin main
    ```

## Part 2: Deploy to Netlify

1.  **Log in to Netlify**:
    *   Go to [Netlify.com](https://www.netlify.com/) and log in.

2.  **Import your Project**:
    *   Click **"Add new site"** > **"Import from an existing project"**.
    *   Select **GitHub**.
    *   Authorize Netlify if asked, then search for and select your `my-portfolio` repo.

3.  **Configure Build Settings**:
    *   Netlify usually detects Next.js automatically.
    *   **Build command**: `npm run build`
    *   **Publish directory**: `.next`

4.  **Add Environment Variables** (CRITICAL):
    *   Click on **"Site settings"** > **"Environment variables"**.
    *   Add the following variables (copy values from your `.env.local` file):
        *   `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
        *   `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
        *   `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

5.  **Deploy**:
    *   Click **"Deploy site"**.
    *   Wait a minute, and your site will be live!
