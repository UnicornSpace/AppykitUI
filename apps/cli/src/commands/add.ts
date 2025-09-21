import { mkdirSync, existsSync, writeFileSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
import { componentsMap } from "../components/index.js";

const ICON_CONTENT = `import { cn } from '@/lib/utils';
import type { LucideIcon, LucideProps } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
 
type IconProps = LucideProps & {
  as: LucideIcon;
};
 
function IconImpl({ as: IconComponent, ...props }: IconProps) {
  return <IconComponent {...props} />;
}
 
cssInterop(IconImpl, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: 'size',
      width: 'size',
    },
  },
});
 
function Icon({ as: IconComponent, className, size = 14, ...props }: IconProps) {
  return (
    <IconImpl
      as={IconComponent}
      className={cn('text-foreground', className)}
      size={size}
      {...props}
    />
  );
}
 
export { Icon };
`;

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

  // --- Add the requested component ---
  const { filename, content, dependencies } = componentsMap[key];
  const filePath = join(targetDir, filename);
  writeFileSync(filePath, content);
  console.log(`✅ ${name} component was added to components/ui.`);

  // --- Always create icon.tsx if it doesn't exist ---
  const iconPath = join(targetDir, "icon.tsx");
  if (!existsSync(iconPath)) {
    writeFileSync(iconPath, ICON_CONTENT);
    console.log("✅ components/ui/icon.tsx created!");
  } else {
    console.log("ℹ️ components/ui/icon.tsx already exists. Skipping.");
  }

  // --- Install dependencies if any ---
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
