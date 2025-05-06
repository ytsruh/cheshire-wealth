import type { Route } from "./+types/insights";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import { Remark } from "react-remark";
import { getSinglePost } from "~/utils";

export async function loader({ params }: Route.LoaderArgs) {
  const slug = params.slug;
  if (!slug) {
    throw new Error("No slug found");
  }
  const post = await getSinglePost(slug);
  return { post };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cheshire Wealth" },
    { name: "description", content: "Expert Financial Advice for Your Future" },
  ];
}

export default function InsightsSingle() {
  const { post } = useLoaderData();

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
          <img
            src={post.image}
            alt={post.title}
            className="mb-6 w-full max-h-80 object-cover rounded-lg shadow"
          />
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
