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

  // Anchor ancestor that Ferozo initially cloned on the hosting server
  const initialAncestor = '0b1386190731f5b63d6f642b79be299d7bb5ec6e';
  let parentCommit = '';

  try {
    parentCommit = execSync('git rev-parse refs/heads/production', { stdio: 'pipe' }).toString().trim();
  } catch {
    try {
      parentCommit = execSync('git rev-parse refs/remotes/origin/production', { stdio: 'pipe' }).toString().trim();
    } catch {}
  }

  let parentFlag = '';
  if (parentCommit) {
    try {
      // Check if the current production commit is descended from initialAncestor
      execSync(`git merge-base --is-ancestor ${initialAncestor} ${parentCommit}`, { stdio: 'pipe' });
      parentFlag = `-p ${parentCommit}`;
    } catch {
      // If it diverged or had no parent, connect directly to initialAncestor so Ferozo can fast-forward!
      parentFlag = `-p ${initialAncestor}`;
    }
  } else {
    parentFlag = `-p ${initialAncestor}`;
  }

  const commit = execSync(`git commit-tree ${tree} ${parentFlag} -m "Production compiled build"`, { env }).toString().trim();
  execSync(`git update-ref refs/heads/production ${commit}`);
  console.log('Production branch created successfully. Commit:', commit, 'Parent flag:', parentFlag);
} finally {
  if (fs.existsSync(tempIndex)) {
    fs.unlinkSync(tempIndex);
  }
}
