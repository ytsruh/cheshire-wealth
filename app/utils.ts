import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string;
}

export const getAllPosts = async () => {
  const BLOG_DIR = path.join(process.cwd(), "app/articles");
  let posts: BlogPost[] = [];

  // Read directory contents
  const files = await fs.promises.readdir(BLOG_DIR);
  posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const filePath = path.join(BLOG_DIR, file);
        const source = await fs.promises.readFile(filePath, "utf8");
        const { data, content } = matter(source);
        return {
          slug: file.replace(/\.md$/, ""),
          title: data.title || "Untitled",
          date: formatDate(new Date(data.date || "")),
          image: data.image || "",
          excerpt: content.slice(0, 120) + (content.length > 120 ? "..." : ""),
        };
      })
  );

  // Sort posts by date in descending order
  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime(); // Sort by date
  });

  // Return sorted posts
  return posts;
};

export const getSinglePost = async (slug: string) => {
  try {
    const BLOG_DIR = path.join(process.cwd(), "app/articles");
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    const source = await fs.promises.readFile(filePath, "utf8");
    const { data, content } = matter(source);
    return {
      slug: data.slug || slug,
      title: data.title || "Untitled",
      date: formatDate(new Date(data.date || "")),
      image: data.image || "",
      excerpt: content.slice(0, 120) + (content.length > 120 ? "..." : ""),
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
};
