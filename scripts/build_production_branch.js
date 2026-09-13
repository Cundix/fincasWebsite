import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const dist = path.resolve('dist');
const tempIndex = path.resolve('.git/temp_idx');

const env = {
  ...process.env,
  GIT_WORK_TREE: dist,
  GIT_INDEX_FILE: tempIndex,
};

try {
  execSync('git add -A', { env, stdio: 'inherit' });
  const tree = execSync('git write-tree', { env }).toString().trim();
  const commit = execSync(`git commit-tree ${tree} -m "Production compiled build"`, { env }).toString().trim();
  execSync(`git update-ref refs/heads/production ${commit}`);
  console.log('Production branch created successfully. Commit:', commit);
} finally {
  if (fs.existsSync(tempIndex)) {
    fs.unlinkSync(tempIndex);
  }
}
