import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Factory, 
  Target, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  History,
  Building2,
  Gem,
  Clock,
  Leaf
} from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Banner */}
      <section className="bg-brand-charcoal py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://antiquewhite-lobster-412253.hostingersite.com/wp-content/uploads/2025/10/stack_products.png" 
            alt="Our Legacy Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-transparent to-brand-charcoal"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest mb-6 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <History size={14} /> Our Legacy
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-lg">Building Trust, <br /> <span className="text-brand-red">One Brick at a Time</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-md">
            Over 30 years of excellence in brick manufacturing, providing strength and durability to thousands of homes and commercial projects.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Who We Are</h3>
                <h2 className="text-4xl font-bold text-brand-charcoal leading-tight">Our Legacy in Brick Manufacturing</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  SHUBHAM BRICKS is a premier name in the brick manufacturing industry of Alwar, Rajasthan. Since our inception, we have been committed to producing high-quality construction materials that stand the test of time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our manufacturing process combines traditional expertise with modern technology to ensure that every brick we produce is of superior quality. We take pride in our "Sweet Water Manufacturing" process, which eliminates salt and dampness, resulting in stronger and more reliable walls for your construction projects.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-brand-offwhite rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal mb-1">Quality First</h4>
                    <p className="text-xs text-gray-500">Uncompromising standards in every brick.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-brand-offwhite rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal mb-1">30+ Years</h4>
                    <p className="text-xs text-gray-500">Decades of trust and experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://antiquewhite-lobster-412253.hostingersite.com/wp-content/uploads/2025/10/stack_products.png" 
                  alt="SHUBHAM BRICKS Legacy" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl animate-pulse">
                <div className="text-sm font-bold uppercase tracking-widest leading-tight">Trusted by 1000+ Builders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 space-y-6">
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-brand-charcoal">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide the construction industry with superior quality, durable, and eco-friendly bricks that ensure the safety and longevity of every structure. We aim to be the most reliable supply partner for builders, contractors, and homeowners across the region.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 space-y-6">
              <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-brand-charcoal">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To set the benchmark for excellence in brick manufacturing through innovation, sustainable practices, and unwavering commitment to quality. We envision a future where SHUBHAM BRICKS is synonymous with the strongest foundations of modern India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Our Values</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Committed to Quality, Strength & Reliability</h2>
            <p className="text-gray-600">Our core values define who we are and how we serve our customers every single day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'Honest dealings and transparent pricing for every customer.', icon: ShieldCheck },
              { title: 'Excellence', desc: 'Striving for perfection in every batch we manufacture.', icon: Gem },
              { title: 'Reliability', desc: 'Consistent quality and on-time delivery, always.', icon: Clock },
              { title: 'Sustainability', desc: 'Eco-friendly manufacturing to protect our environment.', icon: Leaf }
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-4 p-8 rounded-2xl hover:bg-brand-offwhite transition-colors">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-brand-charcoal">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1590069230002-70cc83815b41?q=80&w=2000&auto=format&fit=crop" 
            alt="Manufacturing" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Our Process</h3>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Manufacturing Excellence</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our manufacturing units are equipped with advanced machinery and follow a rigorous quality control process. From raw material selection to the final firing process, every step is monitored to ensure perfection.
              </p>
              <ul className="space-y-4">
                {[
                  'Advanced clay preparation and mixing',
                  'Precision molding for uniform shape',
                  'Controlled drying for structural integrity',
                  'High-temperature firing for maximum strength',
                  'Rigid quality testing before dispatch'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-medium text-gray-300">
                    <CheckCircle2 size={20} className="text-brand-red" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1000&auto=format&fit=crop" alt="Process 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=1000&auto=format&fit=crop" alt="Process 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" alt="Process 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000&auto=format&fit=crop" alt="Process 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Years Experience', value: '30+', icon: History },
              { label: 'Manufacturing Units', value: '3', icon: Factory },
              { label: 'Team Strength', value: '300+', icon: Users },
              { label: 'Projects Supplied', value: '5000+', icon: Building2 }
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="w-14 h-14 bg-brand-offwhite rounded-2xl flex items-center justify-center text-brand-red mx-auto mb-4">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl font-bold text-brand-charcoal">{stat.value}</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-red text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 leading-tight">Ready to Build Your Dream Project with the Strongest Bricks?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch with us today for a custom quote and professional guidance on your construction material needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-brand-red px-10 py-4 rounded-md font-bold text-lg hover:bg-brand-charcoal hover:text-white transition-all shadow-xl">
              Get a Quote
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-brand-red transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
