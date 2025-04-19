import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <main className="bg-white text-gray-900 font-sans text-base md:text-lg min-h-screen flex flex-col">
      <NavBar />
      {/* Hero Section */}
      <section className="bg-gray-50 py-14 border-b mb-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Cheshire Wealth offers a comprehensive suite of financial planning and advisory services to help you achieve your goals with confidence.
          </p>
        </div>
      </section>
      <section className="flex-1 max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded shadow p-6 border border-gray-100 flex flex-col items-center text-center">
            <div className="text-teal-600 text-3xl mb-3">💼</div>
            <h2 className="font-bold text-xl mb-2">Retirement Planning</h2>
            <p className="text-gray-700 text-base">Secure your future with tailored retirement strategies and ongoing support from our experienced advisors.</p>
          </div>
          <div className="bg-white rounded shadow p-6 border border-gray-100 flex flex-col items-center text-center">
            <div className="text-teal-600 text-3xl mb-3">📈</div>
            <h2 className="font-bold text-xl mb-2">Investment Management</h2>
            <p className="text-gray-700 text-base">Grow and protect your wealth with expert portfolio management, risk analysis, and diversification.</p>
          </div>
          <div className="bg-white rounded shadow p-6 border border-gray-100 flex flex-col items-center text-center">
            <div className="text-teal-600 text-3xl mb-3">📝</div>
            <h2 className="font-bold text-xl mb-2">Tax & Estate Guidance</h2>
            <p className="text-gray-700 text-base">Optimize your legacy and minimize tax liabilities with proactive estate and tax planning strategies.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
