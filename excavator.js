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
  console.log('🚜 🚜 🚜 🚜 🚜');
  exec('git', ['pull']);
}

function ensureGitIsClean() {
  if (exec('git', ['status', '--porcelain'])) {
    console.log(prompt + ': `git status` is not clean, aborting.');
    process.exit(1);
  }
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

/**
 * The script
 */
function readySetGo() {
  connectToGitHub();
  ensureGitIsClean();

  shovelDirt();
  runDeploy();

  setTimeout(readySetGo, 3600000);
}

readySetGo();
