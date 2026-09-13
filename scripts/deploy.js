import { execSync } from 'child_process';
import './build_production_branch.js';

console.log('Pushing to GitHub (both main and production)...');
try {
  execSync('git add -A', { stdio: 'inherit' });
  try {
    execSync('git commit -m "Auto-deploy: update production build on main"', { stdio: 'inherit' });
  } catch {
    console.log('No changes to commit on main.');
  }

  execSync('git push origin main', { stdio: 'inherit' });
  
  // Wait 4 seconds to avoid Ferozo rate-limiting rapid successive webhooks
  execSync('node -e "setTimeout(() => {}, 4000)"', { stdio: 'inherit' });

  execSync('git push origin production', { stdio: 'inherit' });
  console.log('Both main and production branches deployed and pushed successfully!');
} catch (error) {
  console.error('Deployment push error:', error.message);
  process.exit(1);
}
