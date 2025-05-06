import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-5 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <div className="font-semibold text-lg mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/insights" className="hover:underline">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Showcase
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="font-semibold text-lg mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* About */}
        <div>
          <div className="font-semibold text-lg mb-4">About</div>
          <p className="text-sm mb-4">
            Cheshire Wealth is a North West based financial services company.
            Our mission is to help our clients achieve their financial goals and
            dreams by providing them with the best possible advice and guidance.
          </p>
          <div className="flex gap-3 text-xl">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        Copyright © 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
