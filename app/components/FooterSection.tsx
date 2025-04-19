import React from "react";

const FooterSection: React.FC = () => (
  <footer className="bg-gray-900 text-gray-300 text-sm pt-12 pb-6 mt-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="font-bold text-white mb-2">Company</div>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-white mb-2">Quick Links</div>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Features</a></li>
          <li><a href="#" className="hover:underline">Pricing</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-white mb-2">About</div>
        <div className="text-gray-400 text-xs">A modern WordPress block theme for creative businesses and agencies. Designed for flexibility and speed.</div>
      </div>
      <div className="md:col-span-1 col-span-1 flex items-end justify-end">
        <div className="text-xs text-gray-500">© 2025 Jadro. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
