#!/usr/bin/env node
const execFileSync = require('child_process').execFileSync;
const prompt = '🚜 🚜 🚜  Dirt Excavator 3000';
const cwd = null;

/**
 * Functions
 */

function exec(command, args, hideFunction) {
  if (!hideFunction) {
    console.log('🚜 >', [command].concat(args).join(' '));
  }
  const options = {};
  if (cwd) {
    options.cwd = cwd;
  }
  return execFileSync(command, args, options).toString();
}

function connectToGitHub() {
  if (!process.env.GITHUB_USER || !process.env.GITHUB_TOKEN) {
    console.log(
      'In order to use ' +
        prompt +
        ', you need to configure a ' +
        'few environment variables to be able to commit to the ' +
        'repository. Follow those steps to get you set up:\n' +
        '\n' +
        'Go to https://github.com/settings/tokens/new\n' +
        ' - Check "public_repo"\n' +
        ' - Press "Generate Token"\n' +
        'You should now have a GITHUB_USER and GITHUB_TOKEN'
    );
    process.exit(1);
  }

  exec('git', ['config', '--global', 'user.name', '🚜 🤖']);
  exec('git', [
    'config',
    '--global',
    'user.email',
    'dirt-excavator@no-reply.github.com',
  ]);
  exec('git', ['remote', 'rm', 'origin']);
  exec(
    'git',
    [
      'remote',
      'add',
      'origin',
      'https://' +
        process.env.GITHUB_USER +
        ':' +
        process.env.GITHUB_TOKEN +
        '@github.com/chrisheninger/freedirtalert.com.git',
    ],
    true
  );
}

function ensureGitIsClean() {
  if (exec('git', ['status', '--porcelain'])) {
    console.log(prompt + ': `git status` is not clean, aborting.');
    process.exit(1);
  }
}

function getCommitHash() {
  return exec('git', ['rev-parse', 'HEAD']).trim();
}

function getFilesChanged(commitHash) {
  const diff = exec('git', [
    'diff-tree',
    '--no-commit-id',
    '--name-only',
    '--diff-filter=d', // Don't list files that have been removed
    '-r',
    commitHash,
  ]);
  return diff.trim().split(/\s+/g).filter(function(file) {
    return (
      file.substring(file.length - 3) === '.js' ||
      file.substring(file.length - 5) === '.json'
    );
  });
}

function shovelDirt(jsFiles) {
  try {
    exec('node', ['shovel.js']);
  } catch (e) {
    console.log('Something broke while trying to shovel dirt.');
    process.exit(1);
  }
}

function runDeploy() {
  try {
    exec('yarn', ['run', 'deploy']);
  } catch (e) {
    console.log('Something broke while deploying.');
    process.exit(1);
  }
}

function updateGitIfChanged(commitHash) {
  const status = exec('git', ['status', '--porcelain']).trim();
  if (status.length > 0) {
    const branch = 'master';
    exec('git', ['add', '--all']);
    exec('git', ['commit', '-m', '🤖']);
    const filesUpdated = getFilesChanged(getCommitHash()).join(' + ');
    console.log(prompt + ': files updated: ' + filesUpdated);
    try {
      exec('git', ['push', 'origin', branch]);
      console.log(prompt + ': Success! 😄');
    } catch (e) {
      console.log(prompt + ': Unable to push changes to master. 😢');
    }
  } else {
    console.log(prompt + ': nothing to update');
  }
}

/**
 * The script
 */
function readySetGo() {
  connectToGitHub();
  ensureGitIsClean();

  shovelDirt();

  const commitHash = getCommitHash();
  updateGitIfChanged(commitHash);

  runDeploy();

  setTimeout(readySetGo, 3600000);
}

readySetGo();
