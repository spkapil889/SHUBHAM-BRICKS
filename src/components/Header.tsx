import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Bricks Calculator', path: '/calculator' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://antiquewhite-lobster-412253.hostingersite.com/wp-content/uploads/2025/09/2-e1758954504540.png" 
            alt="SHUBHAM BRICKS Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-semibold transition-colors hover:text-brand-red',
                isScrolled || !isHome ? 'text-brand-charcoal' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 mr-4">
            <a href="tel:+919876543210" className={cn(
              "flex items-center gap-1 text-sm font-bold",
              isScrolled || !isHome ? "text-brand-charcoal" : "text-white"
            )}>
              <Phone size={16} className="text-brand-red" />
              +91 98765 43210
            </a>
          </div>
          <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className={cn(isScrolled || !isHome ? "text-brand-charcoal" : "text-white")} />
          ) : (
            <Menu size={28} className={cn(isScrolled || !isHome ? "text-brand-charcoal" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-semibold text-brand-charcoal hover:text-brand-red py-2 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-brand-charcoal font-bold">
                <Phone size={20} className="text-brand-red" />
                Call Now
              </a>
              <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-brand-charcoal font-bold">
                <MessageSquare size={20} className="text-green-600" />
                WhatsApp
              </a>
              <Link to="/contact" className="btn-primary text-center">
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
