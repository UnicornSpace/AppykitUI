// source.config.ts
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
var blogs = defineDocs({
  dir: "content/blogs"
});
var learn = defineDocs({
  dir: "content/learn"
});
var source_config_default = defineConfig();
export {
  blogs,
  source_config_default as default,
  learn
};
