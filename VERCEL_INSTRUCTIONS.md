# Deploying to Vercel

Vercel is very easy to use. Since your code is already on GitHub, follow these steps:

1.  **Log in**: Go to [vercel.com](https://vercel.com) and log in (continue with GitHub).
2.  **Add New Project**:
    *   Click **"Add New..."** button.
    *   Select **"Project"**.
3.  **Import Git Repository**:
    *   You should see your `portfolio-your-story` repository in the list.
    *   Click **Import**.
4.  **Configure Project**:
    *   Framework Preset: **Vite** (It should detect this automatically).
    *   Root Directory: `./` (Default).
    *   **Build & Output Settings**:
        *   Build Command: `npm run build` (or `vite build`)
        *   Output Directory: `dist`
    *   (These are usually correct by default).
5.  **Deploy**:
    *   Click **Deploy**.
    *   Wait ~1 minute.

Your site will be live!
