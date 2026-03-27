# PowerShell script to initialize a new public GitHub repository named "Sufi" and push existing files.
# Requires GitHub CLI (gh) installed and authenticated.

# Set Git user configuration (replace with actual details if needed)
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

# Initialize git repository
git init

git add .

git commit -m "Initial commit"

git branch -M main

# Repository name without brackets (GitHub does not allow brackets)
$repoName = "Sufi"

# Create GitHub repository (no source, will push later)
gh repo create $repoName --public --description "SiteVibe project $repoName"

# Retrieve repository URL and add as remote
$repoUrl = gh repo view $repoName --json url -q .url

git remote add origin $repoUrl

git push -u origin main
