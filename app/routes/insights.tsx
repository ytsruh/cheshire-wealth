import type { Route } from "./+types/insights";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InsightsCard from "../components/InsightsCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cheshire Wealth" },
    { name: "description", content: "Expert Financial Advice for Your Future" },
  ];
}

export default function Insights() {
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
          <InsightsCard
            image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
            date="May 1, 2023"
            title="Getting Started with Full Site Editing Theme"
            excerpt="Learn the basics of full site editing and how it can benefit your next project."
          />
          <InsightsCard
            image="https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=400&q=80"
            date="April 26, 2023"
            title="Full Site Editing Theme Vs Classic Theme"
            excerpt="A comparison of modern full site editing themes with traditional WordPress themes."
          />
          <InsightsCard
            image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
            date="March 17, 2023"
            title="Future of WordPress and Gutenberg Blocks"
            excerpt="Discover what's next for WordPress site building and the block editor."
          />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
