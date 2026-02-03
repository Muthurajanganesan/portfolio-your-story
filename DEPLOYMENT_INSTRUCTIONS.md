# Deploying Muthufolio to GitHub Pages

I have already configured the project for deployment.

## Steps to Deploy

Open your terminal in `e:\react\muthufolio` and run these commands:

1.  **Commit the configuration changes:**
    ```powershell
    git add .
    git commit -m "Configure GitHub Pages deployment"
    ```

2.  **Push to your repository:**
    ```powershell
    git push origin main
    ```

3.  **Run the deployment script:**
    ```powershell
    npm run deploy
    ```

## After Deployment
- It typically takes 1-2 minutes for GitHub Pages to update.
- Your website will be live at:
  `https://muthurajanganesan.github.io/portfolio-your-story/`

## Note
If `npm run deploy` fails saying "Permissions Invalid" or asks for a password, it means your terminal needs to be logged in to GitHub.
