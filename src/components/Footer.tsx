import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://antiquewhite-lobster-412253.hostingersite.com/wp-content/uploads/2025/09/2-e1758954504540.png" 
                alt="SHUBHAM BRICKS Logo" 
                className="h-16 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Alwar's most trusted brick manufacturer with over 30 years of legacy. We provide high-quality, durable bricks for residential and commercial construction projects.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Products', 'Services', 'Bricks Calculator', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-brand-red text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">Our Offerings</h3>
            <ul className="space-y-4">
              {['Red Clay Bricks', 'Fly Ash Bricks', 'Solid Bricks', 'Bulk Supply', 'On-Time Delivery', 'Quality Consultation'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-gray-400 hover:text-brand-red text-sm flex items-center gap-2 transition-colors group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-red shrink-0" size={20} />
                <p className="text-gray-400 text-sm">
                  123, Industrial Area, Near Alwar Bypass, Alwar, Rajasthan - 301001
                </p>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-red shrink-0" size={20} />
                <div className="text-gray-400 text-sm">
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-red shrink-0" size={20} />
                <p className="text-gray-400 text-sm">info@shubhambricks.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} SHUBHAM BRICKS. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-medium italic">
            Trusted by builders, contractors & homeowners across Rajasthan.
          </p>
        </div>
      </div>
    </footer>
  );
}
