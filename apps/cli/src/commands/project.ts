import inquirer from "inquirer";
import { execSync } from "child_process";
import { existsSync } from "fs";
import path from "path";

function runCommand(command: string) {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (err: any) {
    console.error("❌ Error running command:", err.message);
    process.exit(1);
  }
}

export async function createProject(appName?: string) {
  // If user didn’t pass name via CLI → ask
  if (!appName) {
    const { name } = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your app name:",
        validate: (input) => (input ? true : "App name cannot be empty"),
      },
    ]);
    appName = name;
  }

  // At this point, TS still thinks appName is string | undefined
  // Add a runtime check + type assertion:
  if (!appName) {
    console.error("❌ App name is required.");
    process.exit(1);
  }

  const finalName: string = appName; // ✅ now guaranteed string
  const projectPath = path.join(process.cwd(), finalName);

  if (existsSync(projectPath)) {
    console.error(`❌ Folder "${finalName}" already exists. Choose another name.`);
    process.exit(1);
  }

  // Ask about nativewind + appykit
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "nativewind",
      message: "Do you want NativeWind setup?",
      default: true,
    },
    {
      type: "confirm",
      name: "appykit",
      message: "Do you want to include AppyKit library?",
      default: true,
      when: (ans) => ans.nativewind,
    },
  ]);

  const { nativewind, appykit } = answers;

  // Case 1: only expo
  if (!nativewind) {
    console.log("\n🚀 Creating blank Expo TypeScript project...");
    runCommand(`npx create-expo-app ${finalName} --template blank-typescript`);
  }

  // Case 2 + 3: clone starter
  if (nativewind) {
    console.log("\n📦 Cloning starter template with NativeWind...");
    runCommand(
      `git clone https://github.com/likithanagaraj/starter-template.git ${finalName}`
    );

    if (appykit) {
      console.log("\n📚 Installing AppyKit...");
      runCommand(`cd ${finalName} && npm install appykit`);
    }
  }

  console.log("\n✅ Project setup complete!");
}

