
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="z-50">
          <span className={`text-2xl font-bold font-display ${scrolled ? "text-primary" : "text-white"}`}>
            RANI Studio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Services", "Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${
                scrolled ? "text-gray-700" : "text-white"
              } hover:text-primary transition duration-300 font-medium`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={scrolled ? "text-gray-800" : "text-white"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-gray-800" : "text-white"} size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-6">
              {["Home", "Services", "Work", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-2xl font-medium hover:text-gray-200 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
