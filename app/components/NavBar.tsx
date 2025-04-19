import React from "react";

const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#", label: "About" },
  { href: "#", label: "Services" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Insights" },
  { href: "#", label: "Contact" },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="relative">
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-lg">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-teal-600">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown */}
      {open && (
        <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md py-2 z-50 flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
