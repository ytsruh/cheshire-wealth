import type { Route } from "./+types/home";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import InsightsCard from "../components/InsightsCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cheshire Wealth" },
    { name: "description", content: "Expert Financial Advice for Your Future" },
  ];
}

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans text-base md:text-lg">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="uppercase text-sm md:text-base text-teal-600 font-bold mb-2 tracking-widest">
              Financial Guidance
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Expert Financial Advice for Your Future
            </h1>
            <p className="text-gray-600 mb-8 max-w-md text-lg md:text-xl">
              Cheshire Wealth helps individuals, families, and businesses achieve their financial goals with
              trusted, personalized advice and planning.
            </p>
            <div className="flex gap-4">
              <Button>Book a Consultation</Button>
              <Button variant="secondary">Our Services</Button>
            </div>
          </div>
          <div className="hidden md:flex flex-1 justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=800&q=80"
              alt="Advisor meeting client"
              className="w-full max-w-2xl h-64 md:h-80 object-cover rounded-xl border-4 border-gray-100 shadow-lg"
              style={{ flex: 1 }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Retirement Planning"
              description="Secure your future with tailored retirement strategies and ongoing support."
            />
            <FeatureCard
              title="Investment Management"
              description="Grow and protect your wealth with expert portfolio management."
            />
            <FeatureCard
              title="Tax & Estate Guidance"
              description="Optimize your legacy and minimize tax liabilities with proactive planning."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah L."
              role="Business Owner"
              image="https://randomuser.me/api/portraits/women/65.jpg"
              testimonial="Cheshire Wealth gave me confidence in my financial future. Their advice is always clear and actionable."
            />
            <TestimonialCard
              name="James T."
              role="Retiree"
              image="https://randomuser.me/api/portraits/men/32.jpg"
              testimonial="Thanks to Cheshire Wealth, my retirement is secure and stress-free."
            />
            <TestimonialCard
              name="Priya S."
              role="Young Professional"
              image="https://randomuser.me/api/portraits/women/53.jpg"
              testimonial="The team at Cheshire Wealth helped me start investing and plan for the long term."
            />
          </div>
        </div>
      </section>

      {/* Custom Section */}
      <section className="py-12 border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Cheshire Wealth?</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 text-gray-600 text-sm md:text-base mb-4 md:mb-0">
              Our experienced advisors provide unbiased guidance, transparent fees, and a commitment to your
              long-term success. We act as your partner in every stage of your financial journey.
            </div>
            <Button>Meet Our Team</Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Insights & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-teal-700">
            Ready to Take Control of Your Financial Future?
          </h2>
          <p className="text-gray-600 mb-6 text-lg md:text-xl">
            Schedule a complimentary consultation with Cheshire Wealth and start planning for tomorrow, today.
          </p>
          <Button>Book a Consultation</Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
