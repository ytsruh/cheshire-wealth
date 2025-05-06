import type { Route } from "./+types/insights";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InsightsCard from "../components/InsightsCard";
import { getAllPosts } from "../utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cheshire Wealth" },
    { name: "description", content: "Expert Financial Advice for Your Future" },
  ];
}

export async function loader() {
  const posts = await getAllPosts();
  return { posts };
}

export default function Insights({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  return (
    <main className="bg-white text-gray-900 font-sans text-base md:text-lg min-h-screen flex flex-col">
      {/* Header */}
      <NavBar />
      {/* Hero Section */}
      <section className="bg-gray-50 py-14 border-b mb-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Insights & Resources
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Stay informed with expert articles, guides, and updates from
            Cheshire Wealth. Our insights help you make smarter financial
            decisions and keep up with the latest trends in wealth management,
            investing, and planning for your future.
          </p>
        </div>
      </section>
      <section className="flex-1 max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <InsightsCard
              key={i}
              link={`/insights/${post.slug}`}
              image={post.image}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
