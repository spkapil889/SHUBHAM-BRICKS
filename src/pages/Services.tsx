import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Truck, 
  Layers, 
  Users, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  Clock,
  HelpCircle,
  Award,
  Leaf,
  Calculator
} from 'lucide-react';

const services = [
  {
    title: 'Brick Manufacturing',
    desc: 'Our core service is the high-quality manufacturing of red clay and fly ash bricks using advanced technology and sweet water processing to ensure maximum strength and zero efflorescence.',
    icon: Factory,
    features: ['Sweet Water Processing', 'Rigid Quality Control', 'High Compressive Strength', 'Uniform Shape & Size']
  },
  {
    title: 'Bulk Order Supply',
    desc: 'We are equipped to handle large-scale orders for residential and commercial projects, ensuring a consistent supply of materials throughout your construction timeline.',
    icon: Layers,
    features: ['Batch Consistency', 'Priority Scheduling', 'Flexible Payment Options', 'Large Inventory']
  },
  {
    title: 'On-Time Delivery Support',
    desc: 'Our dedicated logistics fleet ensures that your bricks reach your site exactly when you need them, minimizing construction delays and optimizing site management.',
    icon: Truck,
    features: ['Dedicated Fleet', 'Real-time Coordination', 'Safe Handling', 'Regional Coverage']
  },
  {
    title: 'Contractor & Builder Supply',
    desc: 'Specialized supply solutions for civil contractors and real estate developers, including customized billing and dedicated account management.',
    icon: Users,
    features: ['Specialized Pricing', 'Dedicated Support', 'Material Take-off Help', 'Long-term Partnerships']
  },
  {
    title: 'Residential Project Supply',
    desc: 'Tailored solutions for individual homeowners building their dream houses, including quantity estimation and quality guidance.',
    icon: Building2,
    features: ['Expert Guidance', 'Small Batch Delivery', 'Personalized Service', 'Cost Optimization']
  },
  {
    title: 'Quality Guidance & Consultation',
    desc: 'Our experts provide professional guidance on selecting the right type of bricks based on your project requirements and structural needs.',
    icon: ShieldCheck,
    features: ['Technical Support', 'Material Selection', 'Usage Best Practices', 'Site Visits']
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-24">
      {/* Banner */}
      <section className="bg-brand-charcoal py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" 
            alt="Services Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Comprehensive supply solutions and professional support for all your construction material requirements.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Our Expertise</h3>
              <h2 className="text-4xl font-bold text-brand-charcoal">Strong Operational Confidence and Reliability</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                At SHUBHAM BRICKS, we don't just sell bricks; we provide a complete supply ecosystem that ensures your construction project runs smoothly. From the initial estimation to the final delivery, we are your reliable partner in building strength.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-brand-offwhite px-4 py-2 rounded-full text-brand-charcoal font-bold text-sm border border-gray-100">
                  <Clock size={16} className="text-brand-red" /> Timely Delivery
                </div>
                <div className="flex items-center gap-2 bg-brand-offwhite px-4 py-2 rounded-full text-brand-charcoal font-bold text-sm border border-gray-100">
                  <ShieldCheck size={16} className="text-brand-red" /> Quality Assurance
                </div>
                <div className="flex items-center gap-2 bg-brand-offwhite px-4 py-2 rounded-full text-brand-charcoal font-bold text-sm border border-gray-100">
                  <Users size={16} className="text-brand-red" /> Expert Support
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590069230002-70cc83815b41?q=80&w=1000&auto=format&fit=crop" 
                alt="Services Intro" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-gray-100 space-y-6"
              >
                <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-charcoal">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-3 pt-4 border-t border-gray-50">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-brand-charcoal font-bold">
                      <CheckCircle2 size={14} className="text-brand-red" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">The Advantage</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Why Work With SHUBHAM BRICKS?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Direct Manufacturing', desc: 'No middlemen. You get the best quality directly from our factory at competitive prices.', icon: Factory },
              { title: 'Proven Track Record', desc: 'Over 30 years of experience and thousands of successful projects across Rajasthan.', icon: Award },
              { title: 'Customer-Centric Approach', desc: 'We prioritize your project needs and provide personalized support throughout.', icon: Users },
              { title: 'Reliable Logistics', desc: 'Our own fleet of vehicles ensures that your supply is never delayed.', icon: Truck },
              { title: 'Technical Expertise', desc: 'Our team can guide you on the best material choices for your structural needs.', icon: ShieldCheck },
              { title: 'Sustainable Practices', desc: 'We follow eco-friendly manufacturing to ensure a better future for all.', icon: Leaf }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 bg-brand-offwhite rounded-xl flex items-center justify-center text-brand-red shrink-0">
                  <item.icon size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-brand-charcoal">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Our Workflow</h3>
            <h2 className="text-4xl font-bold">Simple Process. Reliable Supply.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            {[
              { title: 'Share Requirement', desc: 'Tell us about your project and brick needs.', icon: MessageSquare },
              { title: 'Get Estimate', desc: 'We provide a precise quantity and cost estimate.', icon: Calculator },
              { title: 'Confirm Order', desc: 'Finalize your order with flexible payment options.', icon: CheckCircle2 },
              { title: 'Timely Delivery', icon: Truck, desc: 'Receive your bricks at your site as per schedule.' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-brand-charcoal border-4 border-brand-red flex items-center justify-center text-brand-red shadow-lg">
                  <step.icon size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">{idx + 1}. {step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">FAQ</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Common Questions About Our Services</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is the minimum order quantity for delivery?',
                a: 'We cater to both small residential needs and large bulk orders. Minimum order quantity for delivery depends on your location, but we generally deliver for orders of 2,000 bricks or more.'
              },
              {
                q: 'How long does it take for delivery after order confirmation?',
                a: 'Standard delivery time is 24-48 hours after order confirmation, depending on the order size and site location. For large projects, we can set up a recurring delivery schedule.'
              },
              {
                q: 'Do you provide material take-off services?',
                a: 'Yes, our experts can help you estimate the exact quantity of bricks required for your entire project based on your architectural drawings.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major payment methods including bank transfers, UPI, and cheques. For long-term contractor partnerships, we offer flexible credit terms.'
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
      <section className="py-24 bg-brand-red text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 leading-tight">Ready to Start Your Construction with the Best Materials?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Get in touch with our team today for a custom quote and professional guidance on your construction material needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-brand-red px-10 py-4 rounded-md font-bold text-lg hover:bg-brand-charcoal hover:text-white transition-all shadow-xl">
              Get a Quote
            </Link>
            <a href="https://wa.me/919876543210" className="border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-brand-red transition-all flex items-center gap-2">
              <MessageSquare size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
