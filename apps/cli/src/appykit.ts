import { program } from "commander";
import fs from "fs";
import path from "path";
import ora from "ora";

const allowedComponents = ['button', 'checkbox', 'input', 'text', 'avatar'];

const COMPONENT_TEMPLATE = (name: string) =>
  `// This is a component named ${name}
export const ${name} = () => {
  console.log("This is the ${name} component");
};
`;

program
  .command("add <name>")
  .description("Add a component")
  .action((name: string) => {
    if (!allowedComponents.includes(name.toLowerCase())) {
      console.log(`❌ '${name}' is not an allowed component.`);
      console.log(`Allowed: ${allowedComponents.join(", ")}`);
      return;
    }

    const spinner = ora(`Creating ${name}...`).start();
    const filePath = path.join(process.cwd(), `${name}.ts`);
    fs.writeFileSync(filePath, COMPONENT_TEMPLATE(name));
    spinner.succeed(`${name}.ts created!`);
  });

program
  .command("remove <name>")
  .description("Remove a component")
  .action((name: string) => {
    const spinner = ora(`Removing ${name}...`).start();
    const filePath = path.join(process.cwd(), `${name}.ts`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      spinner.succeed(`${name}.ts removed!`);
    } else {
      spinner.fail(`${name}.ts does not exist.`);
    }
  });

program.parse();
