import type { Route } from "./+types/insights";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InsightsCard from "../components/InsightsCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cheshire Wealth" },
    { name: "description", content: "Expert Financial Advice for Your Future" },
  ];
}

export async function loader() {
  const BLOG_DIR = path.join(process.cwd(), "app/articles");
  let posts: BlogPost[] = [];
  try {
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
            date: data.date || "",
            excerpt: content.slice(0, 120) + (content.length > 120 ? "..." : ""),
          };
        })
    );
  } catch (err) {
    // Optionally log error
  }
  return { posts };
}

export default function Insights({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData as { posts: BlogPost[] };
  return (
    <main className="bg-white text-gray-900 font-sans text-base md:text-lg min-h-screen flex flex-col">
      {/* Header */}
      <NavBar />
      {/* Hero Section */}
      <section className="bg-gray-50 py-14 border-b mb-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Insights & Resources</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Stay informed with expert articles, guides, and updates from Cheshire Wealth. Our insights help
            you make smarter financial decisions and keep up with the latest trends in wealth management,
            investing, and planning for your future.
          </p>
        </div>
      </section>
      <section className="flex-1 max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <a key={post.slug} href={`/insights/${post.slug}`}>
              <InsightsCard
                image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                date={post.date}
                title={post.title}
                excerpt={post.excerpt}
              />
            </a>
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
