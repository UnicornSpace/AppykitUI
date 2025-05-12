import { visit } from "unist-util-visit";

export default function remarkCodeMeta() {
  return (tree) => {
    visit(tree, "code", (node) => {
      if (!node.lang) return;
      const [lang, ...metaParts] = node.lang.split(" ");
      const meta = metaParts.join(" ");
      node.lang = lang;
      node.data = node.data || {};
      node.data.meta = meta;
    });
  };
}