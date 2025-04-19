import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="bg-white text-gray-900 font-sans text-base md:text-lg min-h-screen flex flex-col">
      <NavBar />
      {/* Hero Section */}
      <section className="bg-gray-50 py-14 border-b mb-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to take the next step? Reach out to Cheshire Wealth for a complimentary consultation or any questions you may have.
          </p>
        </div>
      </section>
      <section className="flex-1 w-full px-4 py-16 flex justify-center items-start">
        <form className="bg-white rounded-xl shadow-lg p-10 border border-gray-100 flex flex-col gap-6 w-full max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Send Us a Message</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Name *</label>
            <input id="name" name="name" type="text" required className="w-full border border-gray-300 rounded-lg p-3 text-base focus:ring-2 focus:ring-teal-500 focus:outline-none transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email *</label>
            <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg p-3 text-base focus:ring-2 focus:ring-teal-500 focus:outline-none transition" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">Message *</label>
            <textarea id="message" name="message" required className="w-full border border-gray-300 rounded-lg p-3 min-h-[120px] text-base focus:ring-2 focus:ring-teal-500 focus:outline-none transition" />
          </div>
          <button type="submit" className="mt-2 px-6 py-3 rounded-lg font-semibold text-base bg-teal-600 text-white hover:bg-teal-700 transition w-full md:w-auto mx-auto">Send Message</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
