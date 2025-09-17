


import { initProject } from './commands/init.js';
import { addComponent } from './commands/add.js';
import { removeComponent } from './commands/remove.js';
import { createProject } from './commands/project.js'; // 👈 new import
import { componentsMap } from './components/index.js';

const command = process.argv[2];
const target = process.argv[3];

function showHelp() {
  console.log(`
 AppyKit CLI – Beautiful, Reusable Components for React Native

Usage:
  npx appykit <command> [options]

Available commands:
  init                   Initialize your project with Tailwind, NativeWind, and theming
  project <name>         Create a new project from the starter template
  add <component>        Add a UI component to components/ui
  remove <component>     Remove a UI component from components/ui
  --help, --h            Show this help message

Available components:
  ${Object.keys(componentsMap).join(', ')}

Examples:
  npx appykit init
  npx appykit project my-app
  npx appykit add avatar
  npx appykit remove avatar
`);
}

switch (command) {
  case 'init':
    initProject();
    break;

  case 'project': // 👈 new command
    createProject(target);
    break;

  case 'add':
    if (!target) {
      console.log('❌ Please specify a component to add.');
    } else {
      addComponent(target);
    }
    break;

  case 'remove':
    if (!target) {
      console.log('❌ Please specify a component to remove.');
    } else {
      removeComponent(target);
    }
    break;

  case '--help':
  case '--h':
    showHelp();
    break;

  default:
    console.log(`❌ Unknown command '${command}'. Try '--help' for usage.`);
    break;
}
