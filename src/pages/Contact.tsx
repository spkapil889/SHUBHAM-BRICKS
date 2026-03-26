import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    requirement: 'residential',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-24">
      {/* Banner */}
      <section className="bg-brand-charcoal py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Have a project in mind? Get in touch with our team for a custom quote, technical guidance, or bulk supply inquiries.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Get in Touch</h3>
                <h2 className="text-4xl font-bold text-brand-charcoal">We're Here to Help You Build</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Whether you're a homeowner building your first house or a contractor managing a large-scale development, we have the expertise and capacity to meet your brick requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 p-8 bg-brand-offwhite rounded-3xl border border-gray-100">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-charcoal">Call Us</h4>
                    <p className="text-gray-500 text-sm">+91 98765 43210</p>
                    <p className="text-gray-500 text-sm">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-8 bg-brand-offwhite rounded-3xl border border-gray-100">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-charcoal">Email Us</h4>
                    <p className="text-gray-500 text-sm">info@shubhambricks.com</p>
                    <p className="text-gray-500 text-sm">sales@shubhambricks.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-8 bg-brand-offwhite rounded-3xl border border-gray-100">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-charcoal">Visit Us</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      123, Industrial Area, Near Alwar Bypass, Alwar, Rajasthan - 301001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-8 bg-brand-offwhite rounded-3xl border border-gray-100">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                    <Clock size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-brand-charcoal">Business Hours</h4>
                    <p className="text-gray-500 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-500 text-sm">Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-charcoal p-10 rounded-3xl text-white space-y-6">
                <h3 className="text-2xl font-bold">Quick Support on WhatsApp</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Need an instant quote or have a quick question? Chat with our sales team directly on WhatsApp for faster response.
                </p>
                <a href="https://wa.me/919876543210" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-xl">
                  <MessageSquare size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-brand-charcoal">Send an Inquiry</h3>
                  <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-100 p-10 rounded-2xl text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-green-800">Inquiry Sent Successfully!</h4>
                    <p className="text-green-700">Thank you for reaching out. Our team will contact you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-green-800 font-bold underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full h-14 px-4 bg-brand-offwhite border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full h-14 px-4 bg-brand-offwhite border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full h-14 px-4 bg-brand-offwhite border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">City / Location</label>
                        <input 
                          required
                          type="text" 
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="w-full h-14 px-4 bg-brand-offwhite border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                          placeholder="Alwar"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Requirement Type</label>
                      <select 
                        value={formData.requirement}
                        onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                        className="w-full h-14 px-4 bg-brand-offwhite border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all appearance-none"
                      >
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="bulk">Bulk Supply for Real Estate</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Your Message</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full p-4 bg-brand-offwhite border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all resize-none"
                        placeholder="Tell us about your project requirements..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full h-16 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-charcoal transition-all shadow-xl flex items-center justify-center gap-2"
                    >
                      Send Inquiry <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold bg-brand-offwhite">
          <div className="text-center space-y-4">
            <MapPin size={48} className="mx-auto text-brand-red" />
            <p className="text-xl">Interactive Google Map Placeholder</p>
            <p className="text-sm max-w-xs mx-auto">123, Industrial Area, Near Alwar Bypass, Alwar, Rajasthan - 301001</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm">Support</h3>
            <h2 className="text-4xl font-bold text-brand-charcoal">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How can I get a custom quote for my project?',
                a: 'You can either fill out the inquiry form on this page, call us directly at +91 98765 43210, or send us a message on WhatsApp. We typically provide quotes within 24 hours.'
              },
              {
                q: 'Do you deliver outside Alwar?',
                a: 'Yes, we provide bulk delivery services to nearby regions and districts. Please contact us with your specific location to check delivery feasibility and costs.'
              },
              {
                q: 'Can I visit your manufacturing unit?',
                a: 'We welcome our customers to visit our manufacturing plants to see our quality standards firsthand. Please schedule a visit by calling our office in advance.'
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
    </div>
  );
}
