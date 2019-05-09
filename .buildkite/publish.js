#!/usr/bin/env node

var cp = require('child_process');
var pkg = require('../package.json');

var name = pkg.name;
var version = pkg.version;

function execAndLog(command) {
  console.log(`Running "${command}"`);
  try {
    console.log(cp.execSync(command, { encoding: 'utf8' }));
  } catch (e) {
    process.exit(1);
  }
};

function hasBeenPublished() {
  return !!cp.execSync(`npm view ${name}@${version}`, { encoding: 'utf8' });
}

function buildAndPublish() {
  if (hasBeenPublished()) {
    console.log(`${name}@${version} already published. Skipping build.`);
    return;
  }

  // yarn publish prompts for the new package version and bumps it for you in the package.json,
  // so we'll have to stick with npm publish for now
  execAndLog(`npm publish`);

  console.log(`Published ${name} version ${version} to npm`);
};

buildAndPublish();
