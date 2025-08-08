import { mkdirSync, existsSync, writeFileSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
import { componentsMap } from "../components/index.js";

export function addComponent(name: string) {
  const key = name.toLowerCase();

  if (!componentsMap[key]) {
    console.log(`❌ Component '${name}' is not available.`);
    return;
  }

  const targetDir = join(process.cwd(), "components", "ui");
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
    console.log("📁 Created components/ui folder.");
  }

  const { filename, content, dependencies } = componentsMap[key];
  const filePath = join(targetDir, filename);

  writeFileSync(filePath, content);
  console.log(`✅ ${name} component was added to components/ui.`);

  // ✅ Install dependencies if any
  if (dependencies.length > 0) {
    console.log(`📦 Installing dependencies: ${dependencies.join(", ")}`);
    try {
      execSync(`npx expo install ${dependencies.join(" ")}`, {
        stdio: "inherit",
      });
      console.log("✅ Dependencies installed successfully.");
    } catch (err) {
      console.error("❌ Failed to install dependencies:", err);
    }
  }
}
