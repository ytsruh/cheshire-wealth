import type { Route } from "./+types/insights";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import { Remark } from "react-remark";

export async function loader({ params }: Route.LoaderArgs) {
  const path = await import("path");
  const fs = await import("fs");
  const matter = (await import("gray-matter")).default;
  const BLOG_DIR = path.join(process.cwd(), "app/articles");
  const slug = params.slug || "first-post";
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return { post: null };
  const source = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    post: {
      title: data.title || "Untitled",
      date: data.date || "",
      author: data.author || "",
      image: data.image || "",
      content,
    },
  };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cheshire Wealth" },
    { name: "description", content: "Expert Financial Advice for Your Future" },
  ];
}

export default function InsightsSingle() {
  const { post } = useLoaderData() as { post: { title: string; date: string; author: string; content: string; image?: string } | null };

  if (!post) {
    return <div className="max-w-2xl mx-auto px-4 py-16">Post not found.</div>;
  }

  return (
    <main className="bg-white text-gray-900 font-sans text-base md:text-lg min-h-screen flex flex-col">
      {/* Header */}
      <NavBar />
      <section className="flex-1 max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-2">
          {post.date} {post.author ? `/ ${post.author}` : null}
        </div>
        {post.image && (
          <img src={post.image} alt={post.title} className="mb-6 w-full max-h-80 object-cover rounded-lg shadow" />
        )}
        <div className="prose max-w-none mb-6">
          <Remark>{post.content}</Remark>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
