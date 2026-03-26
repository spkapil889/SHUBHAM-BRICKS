import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Droplets, 
  CloudSun, 
  Leaf, 
  Building2,
  Info,
  ChevronRight,
  HelpCircle,
  Factory
} from 'lucide-react';

const products = [
  {
    id: 'red-clay',
    name: 'Red Clay Bricks',
    tagline: 'Superior Strength & Durability',
    desc: 'Our traditional red clay bricks are manufactured using high-quality clay and sweet water, ensuring maximum strength and zero efflorescence.',
    features: ['High compressive strength', 'Uniform shape and size', 'Excellent thermal insulation', 'Zero dampness'],
    use: 'Ideal for residential homes, partition walls, and load-bearing structures.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'fly-ash',
    name: 'Fly Ash Bricks',
    tagline: 'Eco-Friendly Construction Choice',
    desc: 'Manufactured using high-quality fly ash, cement, and sand, these bricks offer a smooth finish and high strength while being environmentally responsible.',
    features: ['Lightweight yet strong', 'Uniform dimensions', 'Low water absorption', 'Cost-effective'],
    use: 'Best for high-rise buildings, commercial complexes, and modern villas.',
    img: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'modular',
    name: 'Modular Bricks',
    tagline: 'Precision for Modern Architecture',
    desc: 'Designed for modern architectural needs, our modular bricks provide a clean and contemporary look with perfect alignment.',
    features: ['Perfectly straight edges', 'Reduced mortar consumption', 'Fast construction', 'Premium finish'],
    use: 'Perfect for exterior facades, modern homes, and design-focused projects.',
    img: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'solid',
    name: 'Solid Bricks',
    tagline: 'Maximum Load-Bearing Capacity',
    desc: 'Our solid bricks are engineered for heavy-duty construction, offering the highest density and load-bearing capacity in our range.',
    features: ['Ultra-high density', 'Superior sound insulation', 'Fire resistant', 'Maximum durability'],
    use: 'Recommended for industrial foundations, heavy load-bearing walls, and security structures.',
    img: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'project-supply',
    name: 'Project Supply Bricks',
    tagline: 'Consistent Quality for Bulk Orders',
    desc: 'Specially manufactured for large-scale real estate and infrastructure projects, ensuring uniform quality across thousands of units.',
    features: ['Batch consistency', 'Bulk availability', 'Tested quality standards', 'Optimized for large sites'],
    use: 'Large real estate developments, government infrastructure, and mega-projects.',
    img: 'https://images.unsplash.com/photo-1590069230002-70cc83815b41?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'premium',
    name: 'Premium Construction Bricks',
    tagline: 'The Gold Standard of Bricks',
    desc: 'Our highest grade bricks, hand-selected for their perfect finish and maximum strength. The ultimate choice for luxury construction.',
    features: ['Hand-selected quality', 'Aesthetic perfection', 'Highest grade strength', 'Lifetime durability'],
    use: 'Luxury villas, premium residences, and heritage-style architecture.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function Products() {
  return (
    <div className="pt-24 pb-24">
      {/* Banner */}
      <section className="bg-brand-charcoal py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
            alt="Products Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Our Brick Range</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Engineered for strength, manufactured for durability. Explore our comprehensive range of high-quality bricks for every construction need.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Quality Assurance</h3>
              <h2 className="text-4xl font-bold text-brand-charcoal">The Foundation of Every Strong Structure</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                At SHUBHAM BRICKS, we understand that the quality of your construction depends on the quality of the materials used. That's why we follow a rigid manufacturing process to ensure that every brick we produce meets and exceeds industry standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Sweet Water Process',
                  'High Compressive Strength',
                  'Uniform Dimensions',
                  'Weather Resilience'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-brand-charcoal font-bold">
                    <CheckCircle2 size={18} className="text-brand-red" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-offwhite p-10 rounded-3xl border border-gray-100 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-xl font-bold text-brand-charcoal">Tested for Excellence</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every batch of bricks undergoes rigorous testing for water absorption, compressive strength, and efflorescence. We ensure that you receive only the best materials for your construction.
              </p>
              <Link to="/contact" className="btn-primary inline-flex">Request Test Reports</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Listing Grid */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Premium Quality
                  </div>
                </div>
                <div className="p-8 flex-grow space-y-4">
                  <h4 className="text-2xl font-bold text-brand-charcoal">{product.name}</h4>
                  <p className="text-brand-red font-bold text-xs uppercase tracking-widest">{product.tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{product.desc}</p>
                  <div className="pt-4 space-y-2">
                    {product.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                        <CheckCircle2 size={14} className="text-brand-red" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Link to="/contact" className="w-full btn-secondary text-center flex items-center justify-center gap-2 py-3">
                    Inquire Now <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Why Our Bricks?</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">The Shubham Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Sweet Water Process', desc: 'Ensures zero salt content and no dampness in walls.', icon: Droplets },
              { title: 'High Strength', desc: 'Superior load-bearing capacity for multi-story structures.', icon: ShieldCheck },
              { title: 'Eco-Friendly', desc: 'Sustainable manufacturing practices for a greener future.', icon: Leaf },
              { title: 'Weather Proof', desc: 'Withstands extreme heat, cold, and heavy rainfall.', icon: CloudSun }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 bg-brand-offwhite rounded-2xl text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-red mx-auto shadow-sm">
                  <benefit.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-brand-charcoal">{benefit.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Applications</h3>
              <h2 className="text-4xl font-bold">Perfect for Every Construction Need</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Residential Homes', desc: 'Villas, apartments, and private residences.', icon: Building2 },
                  { title: 'Commercial Spaces', icon: Layers, desc: 'Offices, retail complexes, and malls.' },
                  { title: 'Industrial Units', icon: Factory, desc: 'Factories, warehouses, and sheds.' },
                  { title: 'Infrastructure', icon: ShieldCheck, desc: 'Boundary walls, bridges, and public works.' }
                ].map((app, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center text-brand-red mb-4">
                      <app.icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold">{app.title}</h4>
                    <p className="text-gray-400 text-sm">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1590069230002-70cc83815b41?q=80&w=1000&auto=format&fit=crop" 
                alt="Applications" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-red/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">FAQ</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Common Questions About Our Bricks</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What makes your red clay bricks different?',
                a: 'Our bricks are manufactured using "Sweet Water," which means they have zero salt content. This prevents the white powdery substance (efflorescence) from appearing on your walls and ensures much higher durability.'
              },
              {
                q: 'Do you provide bulk delivery to construction sites?',
                a: 'Yes, we have a dedicated fleet of vehicles and logistics support to provide timely bulk delivery directly to your construction site across Alwar and nearby regions.'
              },
              {
                q: 'Are your bricks suitable for high-rise buildings?',
                a: 'Absolutely. Our high-compressive strength bricks and modular fly ash bricks are specifically designed to meet the load-bearing requirements of multi-story structures.'
              },
              {
                q: 'How can I estimate the number of bricks required?',
                a: 'You can use our online Bricks Calculator on this website to get an approximate estimate, or contact our team for a professional material take-off.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-8 bg-brand-offwhite rounded-2xl border border-gray-100 space-y-4">
                <h4 className="text-lg font-bold text-brand-charcoal flex items-center gap-3">
                  <HelpCircle size={20} className="text-brand-red shrink-0" /> {faq.q}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-brand-charcoal mb-6">Need a Custom Product Specification?</h2>
          <p className="text-gray-600 text-lg mb-10">
            We can manufacture bricks as per your specific project requirements and strength standards. Connect with our technical team today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <Link to="/calculator" className="btn-secondary">Use Calculator</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
