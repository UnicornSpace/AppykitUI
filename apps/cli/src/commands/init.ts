import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
import { GLOBAL_CSS_CONTENT } from "../lib/constants";

export function initProject() {
  console.log("✔ Packages installed successfully!");
  console.log("› Installing 4 other packages using bun");

  execSync("bun add tailwindcss-animate class-variance-authority clsx tailwind-merge react-native-svg lucide-react-native", {
    stdio: "inherit",
  });

  // Update tsconfig.json
  const tsconfigPath = "tsconfig.json";
  if (existsSync(tsconfigPath)) {
    try {
      const tsconfig = JSON.parse(readFileSync(tsconfigPath, "utf8"));
      tsconfig.compilerOptions = tsconfig.compilerOptions || {};
      tsconfig.compilerOptions.paths = tsconfig.compilerOptions.paths || {};
      tsconfig.compilerOptions.paths["@/*"] = ["./*"];
      writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
      console.log("✅ tsconfig.json updated with ~ alias!");
    } catch (err) {
      console.error("❌ Failed to update tsconfig.json:", err);
    }
  } else {
    console.log("⚠️ No tsconfig.json found. Skipping alias config.");
  }

  // Create lib/utils.ts
  const libDir = join(process.cwd(), "lib");
  if (!existsSync(libDir)) mkdirSync(libDir, { recursive: true });

  const utilsPath = join(libDir, "utils.ts");
  const utilsContent = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
  writeFileSync(utilsPath, utilsContent);
  console.log("✅ lib/utils.ts created with cn() function!");

  // Create lib/useColorScheme.tsx
  const colorSchemePath = join(libDir, "useColorScheme.tsx");
  const colorSchemeContent = `import { useColorScheme as useNativewindColorScheme } from 'nativewind';

export function useColorScheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useNativewindColorScheme();
  return {
    colorScheme: colorScheme ?? 'dark',
    isDarkColorScheme: colorScheme === 'dark',
    setColorScheme,
    toggleColorScheme,
  };
}
`;
  writeFileSync(colorSchemePath, colorSchemeContent);
  console.log("✅ lib/useColorScheme.tsx created with NativeWind-compatible theming logic!");

  // Create or overwrite global.css
  const cssFilePath = join(process.cwd(), "global.css");
  writeFileSync(cssFilePath, GLOBAL_CSS_CONTENT.trim());
  console.log("✅ global.css written or updated.");

  // Create or overwrite tailwind.config.js
  const tailwindConfigPath = join(process.cwd(), "tailwind.config.js");
  const tailwindConfigContent = `const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};`;
  writeFileSync(tailwindConfigPath, tailwindConfigContent);
  console.log("✅ tailwind.config.js written or updated.");

  // Create or overwrite lib/constants.ts
  const constantsFilePath = join(libDir, "constants.ts");
  const navThemeContent = `export const NAV_THEME = {
  light: {
    background: 'hsl(0 0% 100%)',
    border: 'hsl(240 5.9% 90%)',
    card: 'hsl(0 0% 100%)',
    notification: 'hsl(0 84.2% 60.2%)',
    primary: 'hsl(240 5.9% 10%)',
    text: 'hsl(240 10% 3.9%)',
  },
  dark: {
    background: 'hsl(240 10% 3.9%)',
    border: 'hsl(240 3.7% 15.9%)',
    card: 'hsl(240 10% 3.9%)',
    notification: 'hsl(0 72% 51%)',
    primary: 'hsl(0 0% 98%)',
    text: 'hsl(0 0% 98%)',
  },
};`;
  writeFileSync(constantsFilePath, navThemeContent);
  console.log("✅ lib/constants.ts written or updated.");
}
