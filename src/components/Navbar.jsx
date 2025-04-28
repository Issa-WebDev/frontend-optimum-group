import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";

const navLinks = [
  { title: "Accueil", url: "/" },
  { title: "À propos de nous", url: "/about" },
  {
    title: "Nos Services",
    url: "/services",
    sublinks: [
      { title: "Informatique", url: "/services/informatique" },
      { title: "Bureautique", url: "/services/bureautique" },
      { title: "Avitaillement Maritime", url: "/services/maritime" },
      { title: "Génie Civil", url: "/services/genie-civil" },
    ],
  },
  { title: "Devices", url: "/devices" },
  { title: "Notre Équipe", url: "/team" },
  { title: "Actualités", url: "/blog" },
  { title: "Contact", url: "/contact" },
];

const Navbar = ({ cartItemsCount = 0, toggleCart = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-[#ea384c] cursor-pointer"
        >
          OPTIMUM GROUP
        </Link>

        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleCart} className="relative p-2 cursor-pointer">
            <ShoppingCart
              size={24}
              className={isScrolled ? "text-black" : "text-white"}
            />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ea384c] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 cursor-pointer"
          >
            {isOpen ? (
              <X
                size={24}
                className={isScrolled ? "text-black" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={isScrolled ? "text-black" : "text-white"}
              />
            )}
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.title} className="relative group">
              {link.sublinks ? (
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => toggleDropdown(link.title)}
                >
                  <span
                    className={`text-sm font-medium relative ${
                      isScrolled ? "text-black" : "text-white"
                    } hover:text-[#ea384c]`}
                  >
                    {link.title}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      activeDropdown === link.title ? "rotate-180" : ""
                    } ${isScrolled ? "text-black" : "text-white"}`}
                  />
                </div>
              ) : (
                <Link
                  to={link.url}
                  className={`text-sm font-medium relative cursor-pointer ${
                    isScrolled ? "text-black" : "text-white"
                  } hover:text-[#ea384c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ea384c] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`}
                >
                  {link.title}
                </Link>
              )}

              {link.sublinks && activeDropdown === link.title && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md overflow-hidden py-1 z-50">
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.title}
                      to={sublink.url}
                      onClick={closeMenu}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-[#ea384c] cursor-pointer"
                    >
                      {sublink.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={toggleCart}
            className="relative p-2 ml-2 cursor-pointer"
          >
            <ShoppingCart
              size={20}
              className={isScrolled ? "text-black" : "text-white"}
            />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ea384c] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </button>
        </nav>

        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white pt-16">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 cursor-pointer"
            >
              <X size={28} className="text-black" />
            </button>
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link) => (
                <div key={link.title} className="py-2">
                  {link.sublinks ? (
                    <>
                      <div
                        className="flex items-center justify-between py-2 border-b border-gray-200 cursor-pointer"
                        onClick={() => toggleDropdown(link.title)}
                      >
                        <span className="text-black font-medium">
                          {link.title}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeDropdown === link.title ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {activeDropdown === link.title && (
                        <div className="pl-4 py-2 space-y-2 bg-gray-50">
                          {link.sublinks.map((sublink) => (
                            <Link
                              key={sublink.title}
                              to={sublink.url}
                              onClick={closeMenu}
                              className="block py-2 text-black hover:text-[#ea384c] cursor-pointer"
                            >
                              {sublink.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.url}
                      onClick={closeMenu}
                      className="block py-2 border-b border-gray-200 text-black font-medium hover:text-[#ea384c] cursor-pointer"
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
              <button className="mt-4 bg-[#ea384c] hover:opacity-90 text-white py-2 rounded-md cursor-pointer">
                Nous contacter
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
