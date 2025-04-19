import type { Route } from "./+types/insights";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cheshire Wealth" },
    { name: "description", content: "Expert Financial Advice for Your Future" },
  ];
}

export default function InsightsSingle() {
  return (
    <main className="bg-white text-gray-900 font-sans text-base md:text-lg min-h-screen flex flex-col">
      {/* Header */}
      <NavBar />
      <section className="flex-1 max-w-2xl mx-auto px-4 py-16">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
          alt="Getting Started with Full Site Editing Theme"
          className="rounded mb-8 w-full object-cover h-64 md:h-80"
        />
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Getting Started with Full Site Editing Theme</h1>
        <div className="text-sm text-gray-500 mb-2">May 1, 2023 / Articles</div>
        <div className="text-base text-gray-700 mb-6">
          Lit enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
          <br />
          <br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
