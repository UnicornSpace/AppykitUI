import { createMDX } from "fumadocs-mdx/next";


/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",

      },
    ],
  },
};
const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});
export default withMDX(config);
