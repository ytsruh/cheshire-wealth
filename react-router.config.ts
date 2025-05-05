import type { Config } from "@react-router/dev/config";
import fs from "fs";
import path from "path";

export default {
  async prerender() {
    // Static paths
    const staticPaths = ["/", "/insights", "/services", "/contact"];

    // Dynamically add all insight slugs
    const BLOG_DIR = path.join(process.cwd(), "app/articles");
    const files = await fs.promises.readdir(BLOG_DIR);
    const insightPaths = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => `/insights/${file.replace(/\\.md$/, "")}`);

    // Return all paths
    return [...staticPaths, ...insightPaths];
  },
} satisfies Config;
