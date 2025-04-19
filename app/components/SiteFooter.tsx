import React from "react";

const SiteFooter: React.FC = () => (
  <footer className="bg-gray-900 text-gray-300 text-base pt-12 pb-6 mt-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="font-bold text-white mb-3 text-lg">Cheshire Wealth</div>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Team</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-white mb-3 text-lg">Services</div>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Retirement Planning</a></li>
          <li><a href="#" className="hover:underline">Investment Management</a></li>
          <li><a href="#" className="hover:underline">Tax & Estate Guidance</a></li>
        </ul>
      </div>
      <div>
        <div className="font-bold text-white mb-3 text-lg">Insights</div>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Resources</a></li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-1 flex items-end justify-end">
        <div className="text-base text-gray-500"> 2025 Cheshire Wealth. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
