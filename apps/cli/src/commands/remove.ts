// src/commands/remove.ts
import { existsSync, unlinkSync } from 'fs';
import { join } from 'path';
import { componentsMap } from '../components';

export function removeComponent(name: string) {
  const key = name.toLowerCase();

  if (!componentsMap[key]) {
    console.log(`❌ Component '${name}' is not available. Available: ${Object.keys(componentsMap).join(', ')}`);
    return;
  }

  const filePath = join(process.cwd(), 'components', 'ui', componentsMap[key].filename);

  if (!existsSync(filePath)) {
    console.log(`⚠️ '${componentsMap[key].filename}' does not exist.`);
    return;
  }

  unlinkSync(filePath);
  console.log(`🗑️ '${componentsMap[key].filename}' removed from components/ui.`);
}
