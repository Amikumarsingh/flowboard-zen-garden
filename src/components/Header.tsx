
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-lg bg-zen-purple mr-2 flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="font-bold text-xl">FlowBoard</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-zen-purple transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-zen-purple transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-zen-purple transition-colors">
              Pricing
            </a>
            <Button className="bg-zen-purple hover:bg-zen-purple/90 text-white rounded-full px-6">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-zen-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-zen-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-zen-purple transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <Button className="bg-zen-purple hover:bg-zen-purple/90 text-white rounded-full w-full">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
