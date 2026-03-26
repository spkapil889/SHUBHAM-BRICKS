import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Factory, 
  Users, 
  Star, 
  ChevronRight,
  Droplets,
  CloudSun,
  Leaf,
  Award,
  Layers,
  Building2,
  MessageSquare
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://antiquewhite-lobster-412253.hostingersite.com/wp-content/uploads/2025/10/caption.jpg" 
            alt="SHUBHAM BRICKS Manufacturing" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-charcoal/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-brand-red/30 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-white font-bold text-xs uppercase tracking-widest mb-8 shadow-lg"
            >
              <Award size={14} className="text-brand-red fill-brand-red" />
              <span className="drop-shadow-sm">Alwar's Trusted Brick Manufacturer</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-bold text-white leading-tight mb-8 drop-shadow-2xl"
            >
              Strong Bricks. <br />
              <span className="text-brand-red drop-shadow-lg">Strong Foundations.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-white/95 mb-12 leading-relaxed max-w-2xl drop-shadow-md font-medium"
            >
              Quality bricks for homes, commercial projects & construction needs. Building your dreams with strength and trust for over 30 years.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <Link to="/contact" className="btn-primary flex items-center gap-2 px-10 py-5 text-lg shadow-xl hover:scale-105 transition-transform">
                Get a Quote <ArrowRight size={22} />
              </Link>
              <Link to="/calculator" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-brand-charcoal flex items-center gap-2 px-10 py-5 text-lg transition-all shadow-xl rounded-md font-semibold">
                <Calculator size={22} /> Bricks Calculator
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { label: '30+ Years of Trust', icon: ShieldCheck },
                { label: 'High-Quality Manufacturing', icon: Factory },
                { label: 'Trusted by Builders', icon: Users },
                { label: 'Reliable Supply', icon: Truck },
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <badge.icon className="text-brand-red" size={24} />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {[
              { title: '30+ Years of Legacy', icon: Clock },
              { title: 'Durable Quality Bricks', icon: ShieldCheck },
              { title: 'Timely Supply', icon: Truck },
              { title: 'Trusted Local Manufacturer', icon: Factory },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-brand-charcoal tracking-tight">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://antiquewhite-lobster-412253.hostingersite.com/wp-content/uploads/2025/10/stack_products.png" 
                  alt="Our Legacy - SHUBHAM BRICKS" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-red text-white p-10 rounded-2xl shadow-xl hidden md:block">
                <div className="text-5xl font-bold mb-1">30+</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Experience</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Our Legacy</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight">Legacy of Strength & Trust</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Founded with a vision to provide the highest quality construction materials, SHUBHAM BRICKS has grown into a leading manufacturer in Alwar and surrounding regions. Our journey is built on a foundation of trust, quality-first manufacturing, and a commitment to our customers' dreams.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We leverage decades of expertise and state-of-the-art manufacturing units to ensure that every brick we produce meets the highest standards of durability and strength.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-brand-charcoal">3</div>
                  <div className="text-sm text-gray-500 font-medium">Manufacturing Units</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-charcoal">300+</div>
                  <div className="text-sm text-gray-500 font-medium">Team Strength</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-charcoal">1000+</div>
                  <div className="text-sm text-gray-500 font-medium">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-charcoal">100%</div>
                  <div className="text-sm text-gray-500 font-medium">Quality Assurance</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link to="/about" className="btn-primary">About Us</Link>
                <Link to="/contact" className="btn-secondary">Contact Us</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">The Shubham Advantage</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Why Choose SHUBHAM BRICKS?</h2>
            <p className="text-gray-600">We don't just manufacture bricks; we manufacture trust and durability for your lifetime investments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sweet Water Manufacturing',
                desc: 'No salt, no dampness. Our bricks ensure stronger and more reliable walls with zero efflorescence.',
                icon: Droplets
              },
              {
                title: 'Weather Resistant',
                desc: 'Built for long life and climate resilience, our bricks withstand extreme weather conditions.',
                icon: CloudSun
              },
              {
                title: 'Eco-Friendly Production',
                desc: 'Responsible and sustainable manufacturing practices that minimize environmental impact.',
                icon: Leaf
              },
              {
                title: 'Legacy of Expertise',
                desc: 'Decades of trust in brick manufacturing, ensuring you get the benefit of our vast experience.',
                icon: Award
              },
              {
                title: 'Uniform Shape & Finish',
                desc: 'Precision manufacturing results in uniform size and sharp edges, reducing mortar consumption.',
                icon: Layers
              },
              {
                title: 'Bulk Supply Capability',
                desc: 'Equipped to handle large-scale residential and commercial projects with consistent quality.',
                icon: Building2
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-brand-offwhite rounded-2xl hover:shadow-xl transition-all group border border-gray-100"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-red mb-6 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-brand-charcoal">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS PREVIEW */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Our Range</h3>
              <h2 className="text-4xl font-bold">Our Premium Brick Range</h2>
            </div>
            <Link to="/products" className="text-brand-red font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Red Clay Bricks',
                benefit: 'Superior Strength',
                use: 'Residential & Commercial',
                img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop'
              },
              {
                name: 'Fly Ash Bricks',
                benefit: 'Eco-Friendly Choice',
                use: 'High-Rise Buildings',
                img: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1000&auto=format&fit=crop'
              },
              {
                name: 'Load-Bearing Bricks',
                benefit: 'Maximum Durability',
                use: 'Industrial Structures',
                img: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=1000&auto=format&fit=crop'
              }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                  <div className="text-brand-red font-bold text-xs uppercase tracking-widest">{product.benefit}</div>
                  <h4 className="text-2xl font-bold">{product.name}</h4>
                  <p className="text-gray-400 text-sm">{product.use}</p>
                  <Link to="/products" className="inline-flex items-center gap-2 text-white font-bold pt-4 hover:text-brand-red transition-colors">
                    View Details <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">What We Offer</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Comprehensive Supply Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Brick Manufacturing', icon: Factory },
              { title: 'Bulk Supply for Projects', icon: Layers },
              { title: 'On-Time Delivery Support', icon: Truck },
              { title: 'Contractor Solutions', icon: Users },
              { title: 'Residential Supply', icon: Building2 },
              { title: 'Quality Consultation', icon: ShieldCheck },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
                  <service.icon size={24} />
                </div>
                <h4 className="font-bold text-brand-charcoal">{service.title}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* BRICKS CALCULATOR PREVIEW */}
      <section className="py-24 bg-brand-red text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-white/80 font-bold uppercase tracking-widest text-sm">Smart Tools</h3>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Estimate Your Brick Requirement Easily</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Avoid wastage and save costs. Use our professional bricks calculator to estimate the exact number of bricks required for your project based on wall dimensions and brick type.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  'Accurate Quantity Estimation',
                  'Wastage Buffer Calculation',
                  'Cost Optimization',
                  'Easy to Use Interface'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold">
                    <CheckCircle2 size={20} className="text-white" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/calculator" className="inline-flex bg-white text-brand-red px-10 py-4 rounded-md font-bold text-lg hover:bg-brand-charcoal hover:text-white transition-all shadow-xl">
                Open Bricks Calculator
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80">Wall Length (ft)</label>
                    <div className="bg-white/20 h-12 rounded-lg border border-white/30"></div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80">Wall Height (ft)</label>
                    <div className="bg-white/20 h-12 rounded-lg border border-white/30"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80">Brick Type</label>
                  <div className="bg-white/20 h-12 rounded-lg border border-white/30"></div>
                </div>
                <div className="pt-6 border-t border-white/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium opacity-80">Estimated Bricks</span>
                    <span className="text-2xl font-bold">---</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">How It Works</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Simple Process. Reliable Supply.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            {[
              { title: 'Share Requirement', desc: 'Tell us about your project and brick needs.', icon: MessageSquare },
              { title: 'Get Estimate', desc: 'We provide a precise quantity and cost estimate.', icon: Calculator },
              { title: 'Confirm Order', desc: 'Finalize your order with flexible payment options.', icon: CheckCircle2 },
              { title: 'Timely Delivery', icon: Truck, desc: 'Receive your bricks at your site as per schedule.' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-red flex items-center justify-center text-brand-red shadow-lg">
                  <step.icon size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-brand-charcoal">{idx + 1}. {step.title}</h4>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Who We Serve</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Supplying Bricks for Every Project</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Home Construction',
              'Villas & Residential Projects',
              'Commercial Buildings',
              'Boundary Walls',
              'Contractors & Builders',
              'Real Estate Developments'
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-brand-grey rounded-full flex items-center justify-center text-brand-red mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Building2 size={24} />
                </div>
                <h4 className="font-bold text-brand-charcoal">{industry}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Testimonials</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Trusted by Industry Experts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Civil Contractor',
                text: 'Shubham Bricks has been our primary supplier for over 5 years. Their sweet water bricks are exceptional in strength and finish. Highly recommended for quality-conscious builders.',
                rating: 5
              },
              {
                name: 'Amit Sharma',
                role: 'Homeowner',
                text: 'Building my dream home was easy with Shubham Bricks. Their team helped me estimate the exact quantity, and the delivery was perfectly on time. The bricks are very durable.',
                rating: 5
              },
              {
                name: 'Vikram Singh',
                role: 'Real Estate Developer',
                text: 'For large scale projects, consistency is key. Shubham Bricks provides uniform quality across bulk orders, which is rare to find. Their manufacturing process is truly professional.',
                rating: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="p-8 bg-brand-offwhite rounded-2xl border border-gray-100 space-y-6">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal">{t.name}</h4>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Latest Insights</h3>
              <h2 className="text-4xl font-bold text-brand-charcoal">Construction Tips & Trends</h2>
            </div>
            <Link to="/blog" className="text-brand-red font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Blogs <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Choose Quality Bricks for House Construction',
                excerpt: 'Selecting the right bricks is crucial for the longevity of your home. Learn the key factors to check...',
                img: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000&auto=format&fit=crop'
              },
              {
                title: 'Red Bricks vs Fly Ash Bricks: Which is Better?',
                excerpt: 'A comprehensive comparison between traditional red clay bricks and modern fly ash bricks for your project...',
                img: 'https://images.unsplash.com/photo-1590069230002-70cc83815b41?q=80&w=1000&auto=format&fit=crop'
              },
              {
                title: 'Things to Check Before Ordering Bricks in Bulk',
                excerpt: 'Bulk orders require careful planning. Here is a checklist to ensure a smooth procurement process...',
                img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop'
              }
            ].map((post, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-brand-charcoal leading-tight group-hover:text-brand-red transition-colors">{post.title}</h4>
                  <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-brand-red font-bold text-sm">
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Need Quality Bricks for Your Next Project?</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Connect with SHUBHAM BRICKS for durable, trusted, and professionally supplied construction bricks.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn-primary px-10 py-4 text-lg">Get a Quote</Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-charcoal px-10 py-4 text-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
