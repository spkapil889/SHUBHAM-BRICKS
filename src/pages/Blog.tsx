import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronRight, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Filter,
  Clock
} from 'lucide-react';

const blogPosts = [
  {
    title: 'How to Choose Quality Bricks for House Construction',
    excerpt: 'Selecting the right bricks is crucial for the longevity of your home. Learn the key factors to check before making a purchase, including strength, water absorption, and efflorescence.',
    img: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000&auto=format&fit=crop',
    date: 'Oct 15, 2025',
    author: 'Shubham Team',
    category: 'Construction Tips',
    readTime: '5 min read'
  },
  {
    title: 'Red Bricks vs Fly Ash Bricks: Which is Better?',
    excerpt: 'A comprehensive comparison between traditional red clay bricks and modern fly ash bricks. We analyze cost, strength, environmental impact, and suitability for different types of projects.',
    img: 'https://images.unsplash.com/photo-1590069230002-70cc83815b41?q=80&w=1000&auto=format&fit=crop',
    date: 'Oct 10, 2025',
    author: 'Admin',
    category: 'Material Guide',
    readTime: '8 min read'
  },
  {
    title: 'Things to Check Before Ordering Bricks in Bulk',
    excerpt: 'Bulk orders require careful planning to avoid delays and extra costs. Here is a checklist to ensure a smooth procurement process, from quantity estimation to site delivery coordination.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
    date: 'Oct 05, 2025',
    author: 'Logistics Head',
    category: 'Procurement',
    readTime: '6 min read'
  },
  {
    title: 'The Importance of Sweet Water in Brick Manufacturing',
    excerpt: 'Why does the water quality matter? Learn how sweet water manufacturing prevents dampness and salt formation in your walls, ensuring a long-lasting and beautiful finish.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    date: 'Sep 28, 2025',
    author: 'Quality Control',
    category: 'Manufacturing',
    readTime: '4 min read'
  },
  {
    title: 'Cost Estimation for a Single Room Construction',
    excerpt: 'Planning to add a room? We break down the material requirements and costs, focusing on how to optimize your brick order for maximum efficiency and minimum wastage.',
    img: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1000&auto=format&fit=crop',
    date: 'Sep 20, 2025',
    author: 'Estimator',
    category: 'Budgeting',
    readTime: '10 min read'
  },
  {
    title: 'Modern Trends in Brick Architecture in Rajasthan',
    excerpt: 'Explore how traditional bricks are being used in contemporary architectural designs across Rajasthan, from exposed brick facades to intricate jali patterns.',
    img: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=1000&auto=format&fit=crop',
    date: 'Sep 12, 2025',
    author: 'Architect',
    category: 'Design',
    readTime: '7 min read'
  }
];

const categories = [
  'All Topics',
  'Construction Tips',
  'Material Guide',
  'Procurement',
  'Manufacturing',
  'Budgeting',
  'Design',
  'Industry News'
];

export default function Blog() {
  return (
    <div className="pt-24 pb-24">
      {/* Banner */}
      <section className="bg-brand-charcoal py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000&auto=format&fit=crop" 
            alt="Blog Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Latest Insights</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Expert advice, construction tips, and industry trends to help you build your dream project with confidence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-1/4 space-y-10 order-2 lg:order-1">
              {/* Search */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-brand-charcoal border-l-4 border-brand-red pl-3">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full h-12 pl-12 pr-4 bg-brand-offwhite border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-brand-charcoal border-l-4 border-brand-red pl-3">Categories</h3>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {categories.map((cat, idx) => (
                    <button 
                      key={idx} 
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all text-left ${idx === 0 ? 'bg-brand-red text-white shadow-md' : 'bg-brand-offwhite text-gray-600 hover:bg-gray-100'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Topics */}
              <div className="bg-brand-charcoal p-8 rounded-3xl text-white space-y-6">
                <h3 className="text-xl font-bold">Need Expert Advice?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our technical team can help you with specific construction challenges and material selections.
                </p>
                <Link to="/contact" className="btn-primary w-full text-center inline-block">Connect Now</Link>
              </div>

              {/* Tags */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-brand-charcoal border-l-4 border-brand-red pl-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Bricks', 'Alwar', 'Construction', 'Home Building', 'Cost', 'Red Bricks', 'Fly Ash', 'Quality'].map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-brand-offwhite text-gray-500 text-xs font-bold rounded-md border border-gray-100 uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Blog Grid */}
            <div className="lg:w-3/4 order-1 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, idx) => (
                  <motion.article 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-brand-red text-[10px] font-bold uppercase tracking-widest shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-8 flex-grow space-y-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} /> {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} /> {post.readTime}
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-brand-charcoal leading-tight group-hover:text-brand-red transition-colors">{post.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    <div className="p-8 pt-0 mt-auto">
                      <Link to="#" className="inline-flex items-center gap-2 text-brand-red font-bold text-sm group-hover:gap-3 transition-all">
                        Read Full Article <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex justify-center gap-2">
                {[1, 2, 3].map((num) => (
                  <button 
                    key={num} 
                    className={`w-12 h-12 rounded-xl font-bold transition-all ${num === 1 ? 'bg-brand-red text-white shadow-lg' : 'bg-brand-offwhite text-gray-600 hover:bg-gray-100'}`}
                  >
                    {num}
                  </button>
                ))}
                <button className="w-12 h-12 rounded-xl bg-brand-offwhite text-gray-600 hover:bg-gray-100 flex items-center justify-center font-bold">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="bg-brand-red rounded-3xl p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">Subscribe to Our Newsletter</h2>
                <p className="text-white/80 text-lg">
                  Get the latest construction tips, material guides, and industry news delivered directly to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-grow h-14 px-6 bg-white/20 border border-white/30 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button className="h-14 px-10 bg-white text-brand-red font-bold rounded-xl hover:bg-brand-charcoal hover:text-white transition-all shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
