import type { Route } from "./+types/home";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import InsightsCard from "../components/InsightsCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { MapPinned, Pointer, Scale, BookOpenText } from "lucide-react";
import { getAllPosts } from "~/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cheshire Wealth" },
    { name: "description", content: "Expert Financial Advice for Your Future" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  return {
    posts: (await getAllPosts()).slice(0, 3),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
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
              Cheshire Wealth helps individuals, families, and businesses
              achieve their financial goals with trusted, personalized advice
              and planning.
            </p>
            <div className="flex gap-4">
              <Button className="hover:cursor-pointer">
                Book a Consultation
              </Button>
              <Button className="hover:cursor-pointer" variant="secondary">
                Our Services
              </Button>
            </div>
          </div>
          <div className="hidden md:flex flex-1 justify-center md:justify-end">
            <img
              src="home-hero.png"
              alt="Advisor meeting client"
              className="w-full max-w-2xl h-64 md:h-80 object-cover rounded-xl border-4 border-gray-100 shadow-lg"
              style={{ flex: 1 }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Budgeting"
              description="Optimize your budget and minimize expenses with proactive planning."
            />
            <FeatureCard
              title="Retirement Planning"
              description="Secure your future with tailored retirement strategies and ongoing support."
            />
            <FeatureCard
              title="Investment Management"
              description="Grow and protect your wealth with expert portfolio management."
            />
          </div>
          <div className="flex justify-center pt-5">
            <Link to="/services">
              <Button variant="secondary" className="hover:cursor-pointer">
                Find out more
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-12 border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Client Testimonials
          </h2>
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
      </section> */}

      {/* Why choose Section */}
      <section className="py-12 border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Choose Cheshire Wealth?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center justify-between gap-4">
                <div className="flex flex-col items-center justify-between gap-2">
                  <div className="text-teal-600">
                    <Pointer size={48} />
                  </div>
                  <div className="text-3xl">Simple</div>
                </div>
                <div className="text-base text-center">
                  We speak in clear and concise language & aim to make money
                  simple for everybody.
                </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center justify-between gap-2">
                  <div className="text-teal-600">
                    <MapPinned size={48} />
                  </div>
                  <div className="text-3xl">Local</div>
                </div>
                <div className="text-base text-center">
                  Based in the North West of England, we are proud to be a local
                  business acting in the best interests of our clients.
                </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center justify-between gap-2">
                  <div className="text-teal-600">
                    <Scale size={48} />
                  </div>
                  <div className="text-3xl">Unbiased</div>
                </div>
                <div className="text-base text-center">
                  We act in your best interests, not ours. We are committed to
                  providing impartial advice and guidance to our clients.
                </div>
              </div>
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center justify-between gap-2">
                  <div className="text-teal-600">
                    <BookOpenText size={48} />
                  </div>
                  <div className="text-3xl">Transparent</div>
                </div>
                <div className="text-base text-center">
                  We are open and honest about our services and fees. We believe
                  in full disclosure and transparency.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Insights & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-teal-700">
            Ready to Take Control of Your Financial Future?
          </h2>
          <p className="text-gray-600 mb-3 text-lg md:text-xl">
            Schedule a complimentary consultation with Cheshire Wealth and start
            planning for tomorrow, today.
          </p>
          <Link to="/contact">
            <Button className="hover:cursor-pointer">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
