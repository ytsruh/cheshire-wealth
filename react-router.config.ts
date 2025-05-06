import type { Config } from "@react-router/dev/config";
import fs from "fs";
import path from "path";
import { getAllPosts } from "./app/utils";

export default {
  async prerender() {
    // Static paths
    const staticPaths = ["/", "/insights", "/services", "/contact"];

    // Dynamically add all insight slugs
    const posts = await getAllPosts();
    const insightPaths = posts.map((post) => `/insights/${post.slug}`);
    // Return all paths
    return [...staticPaths, ...insightPaths];
  },
} satisfies Config;
