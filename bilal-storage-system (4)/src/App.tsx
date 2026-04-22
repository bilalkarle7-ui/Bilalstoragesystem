import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Menu, X, ChevronRight, ChevronLeft, Phone, Mail, MapPin, Search,
  CheckCircle2, Factory, ShieldCheck, Box, Clock, Wrench, Download, Star, MessageSquare, Facebook, Instagram, Camera
} from 'lucide-react';
import AIVisualizer from './AIVisualizer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAIVisualizer, setShowAIVisualizer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [compareList, setCompareList] = useState<any[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const products = [
    {
      name: 'Slotted Angle Racks',
      desc: 'Versatile and easy to assemble racks for various storage needs.',
      image: 'input_file_0.png',
      images: ['input_file_0.png', 'input_file_1.png', 'input_file_6.png'],
      specs: [
        { label: 'Material', value: 'High Grade Mild Steel' },
        { label: 'Loading Capacity', value: '50kg - 250kg per layer' },
        { label: 'Finish', value: 'Powder Coated / Paint' },
        { label: 'Height', value: 'Up to 12 Feet' }
      ]
    },
    {
      name: 'Heavy Duty Racks',
      desc: 'Robust storage systems designed for industrial and warehouse heavy loads.',
      image: 'input_file_2.png',
      images: ['input_file_2.png', 'input_file_3.png', 'input_file_6.png'],
      specs: [
        { label: 'Material', value: 'Structural Steel (H-Beam/C-Channel)' },
        { label: 'Loading Capacity', value: '500kg - 3000kg per layer' },
        { label: 'Finish', value: 'Epoxy Powder Coated' },
        { label: 'Scalability', value: 'Fully Modular' }
      ]
    },
    {
      name: 'Lockers',
      desc: 'Secure storage lockers for industrial and commercial environments.',
      image: 'input_file_1.png',
      images: ['input_file_1.png', 'input_file_4.png', 'input_file_6.png'],
      specs: [
        { label: 'Design', value: 'Multi-door configurations' },
        { label: 'Security', value: 'Padlock / Key Lock options' },
        { label: 'Vents', value: 'Louvered for air flow' },
        { label: 'Usage', value: 'Gyms, Factories, Offices' }
      ]
    },
    {
      name: 'Mezzanine Floors',
      desc: 'Custom-built mezzanine systems to double your usable floor space.',
      image: 'input_file_5.png',
      images: ['input_file_5.png', 'input_file_0.png', 'input_file_6.png'],
      specs: [
        { label: 'System', value: 'Column & Beam supported' },
        { label: 'Decking', value: 'Steel plate / Plywood' },
        { label: 'Utility', value: 'Office or Storage space' },
        { label: 'Installation', value: 'Non-disruptive to existing floor' }
      ]
    },
    {
      name: 'Pallet Racking Systems',
      desc: 'Efficient storage for palletized goods, maximizing warehouse workflow.',
      image: 'input_file_3.png',
      images: ['input_file_3.png', 'input_file_6.png', 'input_file_0.png'],
      specs: [
        { label: 'Access', value: '100% Selectivity' },
        { label: 'Load', value: 'Up to 4000kg per level' },
        { label: 'Safety', value: 'Upright guards & horizontal bracing' },
        { label: 'Design', value: 'Adjustable by 75mm pitches' }
      ]
    },
    {
      name: 'Pigeon Hole Racks',
      desc: 'Organized pigeon hole storage for small items and spare parts.',
      image: 'input_file_4.png',
      images: ['input_file_4.png', 'input_file_2.png', 'input_file_6.png'],
      specs: [
        { label: 'Organization', value: 'Custom number of bins' },
        { label: 'Identification', value: 'Label holder options' },
        { label: 'Picking', value: 'Ideal for manual order picking' },
        { label: 'Material', value: 'Lightweight Mild Steel' }
      ]
    }
  ];

  const toggleCompare = (product: any) => {
    setCompareList(prev => {
      if (prev.find(p => p.name === product.name)) {
        return prev.filter(p => p.name !== product.name);
      }
      if (prev.length >= 3) return prev;
      return [...prev, product];
    });
  };

  const partners = [
    { name: 'J D Industries', link: 'https://www.indiamart.com/jdindustries/profile.html?srsltid=AfmBOooe12xQs3iMzkykRkXPowWY_3aeg155FCnv1h2s1DyPtnxPSMWL' },
    { name: 'Naam Fabrication', note: 'Mohammed Shoaib Chaudhary (Jogeshwari West)' }
  ];

  const clients = [
    { name: 'AIZEL PHARMA PVT LTS' },
    { name: 'CCM FACILITY MANAGEMENT PRIVATE LIMITED' },
    { name: 'ADVANCE POWER DISPLAY SYSTEM LIMITED' },
    { name: 'Delhivery Limited', link: 'https://www.delhivery.com/' },
    { name: 'Auto Hangar (India) Pvt. Ltd.' }
  ];

  const galleryImages = [
    'input_file_0.png',
    'input_file_2.png',
    'input_file_5.png',
  ];

  const testimonials = [
    {
      name: "Sandeep Gupta",
      company: "Industrial Manager",
      text: "The heavy-duty racks from Bilal Storage System have completely transformed our warehouse efficiency. Exceptional quality and professional installation."
    },
    {
      name: "Amit Sharma",
      company: "Retail Store Owner",
      text: "Decades of experience really shows. Their slotted angle racks are the best in Mumbai - sturdy, precise, and delivered on time."
    },
    {
      name: "Priya Singh",
      company: "Logistics Head",
      text: "Customized mezzanine flooring solved our space problem without moving facilities. Highly recommend Rafiq and his team."
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Factory, title: '30+ Years Experience', desc: 'Established in 1994, bringing decades of manufacturing expertise.' },
    { icon: ShieldCheck, title: 'High-Quality Mild Steel', desc: 'Durable construction offering high load capacity and longevity.' },
    { icon: Wrench, title: 'Customizable Solutions', desc: 'Racks and storage systems tailored to your exact specifications.' },
    { icon: Clock, title: 'Fast Response', desc: 'Quick ~20-25 minutes response time to handle your inquiries.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-brand-black">
      {/* Top Header */}
      <div className="bg-brand-black text-white py-2 px-4 md:px-8 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center hidden md:flex">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Phone size={14} className="text-brand-orange" /> +91 9892944396</span>
          <span className="flex items-center gap-2"><Mail size={14} className="text-brand-orange" /> bilalstoragesystem@gmail.com</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Clock size={14} className="text-brand-orange"/> Mon - Sun: 9:00 AM - 9:00 PM</span>
          <div className="flex items-center gap-3 border-l border-gray-700 pl-6">
             <a href="https://www.facebook.com/share/1B5Fqwhvbn/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors" title="Facebook"><Facebook size={16} /></a>
             <a href="https://www.instagram.com/bilal_storage_system?utm_source=qr&igsh=MXN0N3J3Z3Z3ZjFsag==" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors" title="Instagram"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-brand-orange text-white p-2 rounded-lg font-display font-bold text-xl group-hover:bg-brand-black transition-colors">
              BSS
            </div>
            <div className="flex flex-col">
              <span className="font-verdana font-bold text-2xl leading-none text-brand-black tracking-tighter">BILAL</span>
              <span className="text-brand-orange text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">Storage & System</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm font-semibold text-gray-700 hover:text-brand-orange uppercase tracking-wider transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-black transition-colors flex items-center gap-2">
              <MessageSquare size={18} />
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-black" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-semibold text-gray-800 p-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-black transition-colors mt-2">
              Get Quote
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-brand-black text-white overflow-hidden">
        {/* Background Graphic/Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-orange via-brand-black to-brand-black"></div>
        <div className="absolute top-0 right-0 w-[800px] h-full bg-brand-orange opacity-20 transform skew-x-[-20deg] origin-top-right"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 pr-0 md:pr-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6 text-brand-orange font-medium text-sm border border-brand-orange/30">
                <ShieldCheck size={16} /> Highly Rated Manufacturer in Mumbai
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6 text-white uppercase">
                Your Trusted Partner for <span className="text-brand-orange">Durable Storage</span> Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light">
                Manufacturers &amp; Suppliers of high-quality Slotted Angle Racks, Heavy Duty Racks, and Industrial Storage Systems. Proudly serving since 1994.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-black transition-all flex items-center justify-center gap-2">
                  Explore Products <ChevronRight size={20} />
                </a>
                <a href="#contact" className="bg-transparent text-white border border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                  Request a Catalog
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-2/5 mt-16 md:mt-0 relative">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative"
            >
              <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7450f2c?auto=format&fit=crop&q=80&w=800" alt="Industrial Storage Systems" className="rounded-2xl shadow-[0_20px_50px_rgba(255,90,0,0.15)] relative z-10 border-4 border-brand-gray" />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 bg-brand-orange text-white p-6 rounded-xl shadow-xl z-20 font-display">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm font-medium uppercase tracking-wide">Years Exp</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features/USP */}
      <section className="py-12 bg-brand-orange relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-2xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 items-start text-white"
              >
                <div className="bg-white/20 p-3 rounded-lg shrink-0">
                  <feat.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg mb-1">{feat.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Partners Banner */}
      <section className="pt-24 pb-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 md:mr-4">Official Verified Supplier On:</span>
              
              <a href="https://www.indiamart.com/bilal-storage-system/profile.html?srsltid=AfmBOoqQM7V9ZtnjFcmVCTOAq7rtGvYzReK3nfesJLaqLkjqVQN5zfae" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-105 transition-transform" title="Bilal Storage System on IndiaMART">
                  <span className="font-display font-black text-2xl tracking-tighter"><span className="text-[#032e5c]">India</span><span className="text-[#e21a22]">MART</span></span>
              </a>
              
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              
              <a href="https://www.justdial.com/Mumbai/Bilal-Storage-System-Near-LIG-Colony-Kurla-West/022PXX22-XX22-110921114736-R8E6_BZDET" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-105 transition-transform" title="Bilal Storage System on Justdial">
                  <span className="font-sans font-bold italic text-3xl tracking-tight leading-none"><span className="text-[#FF5A00]">Just</span><span className="text-[#0B0B0B]">dial</span></span>
              </a>
            </div>

            <div className="flex flex-col items-center w-full">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Our Business Partners</span>
              <div className="flex flex-wrap justify-center gap-10">
                {partners.map((partner, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {partner.link ? (
                      <a href={partner.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-gray-700 hover:text-brand-orange transition-colors underline-offset-4 hover:underline">
                        {partner.name}
                      </a>
                    ) : (
                      <span className="text-xl font-bold text-gray-700">{partner.name}</span>
                    )}
                    {partner.note && <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">{partner.note}</span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="absolute top-0 -left-4 w-24 h-24 bg-brand-orange/10 rounded-full blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800" 
                alt="Warehouse inside" 
                className="w-full h-auto rounded-3xl object-cover min-h-[400px] border-l-8 border-brand-orange border-b-8"
              />
              <div className="absolute -right-8 bottom-12 bg-white p-6 rounded-2xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                  <span className="font-bold">4.4/5</span>
                </div>
                <p className="text-sm font-medium text-gray-500">Trusted by over 30+ verified users.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-2 text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-orange"></span> About Us
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-6 leading-tight">
                Pioneering Storage Solutions since 1994
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  <strong>Bilal Storage System</strong>, established in 1994, is a trusted manufacturer and supplier of high-quality storage solutions based in Mumbai. With over three decades of experience, the company specializes in designing and manufacturing durable and customizable storage racks for industrial, commercial, and warehouse applications.
                </p>
                <p>
                  Customer satisfaction is at the core of our operations. We focus on delivering reliable, cost-effective, and long-lasting storage systems tailored to client requirements. Our expertise in slotted angle racks and heavy-duty storage solutions makes us a preferred choice across industries.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-brand-black">
                    <h5 className="font-bold text-brand-black mb-2 flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-orange"/> Our Mission</h5>
                    <p className="text-sm text-gray-600">To provide efficient, durable, and cost-effective storage solutions that enhance operational efficiency.</p>
                 </div>
                 <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-brand-orange">
                    <h5 className="font-bold text-brand-black mb-2 flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-black"/> Our Vision</h5>
                    <p className="text-sm text-gray-600">To become a leading storage system manufacturer in India known for innovation and quality.</p>
                 </div>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 font-bold text-brand-black hover:text-brand-orange transition-colors border-b-2 border-brand-orange pb-1">
                Discuss Your Requirements <ChevronRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div className="max-w-2xl">
              <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-2 text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-orange"></span> Our Competitive Edge
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black leading-tight mb-6">
                Why Industry Leaders <span className="text-brand-orange">Choose Us</span>
              </h2>
            </div>
            <p className="md:w-1/3 text-gray-500 text-lg">
              We combine decades of traditional craftsmanship with modern engineering to solve your most complex storage challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            {[
              { 
                icon: Clock, 
                title: '30+ Years Legacy', 
                stat: 'Est. 1994',
                desc: 'A tradition of trust and excellence in manufacturing since 1994, serving thousands of satisfied clients in Mumbai and beyond.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'Uncompromising Quality', 
                stat: 'ISI Grade',
                desc: 'We use high-grade mild steel and robust structural sections, ensuring our racks handle heavy loads without buckling.' 
              },
              { 
                icon: Wrench, 
                title: 'Custom Engineering', 
                stat: '100% Tailored',
                desc: 'From bespoke dimensions to custom load-bearing capacities, we design systems that maximize your specific vertical space.' 
              },
              { 
                icon: MessageSquare, 
                stat: '25 min Response',
                title: 'Fast-Track Support', 
                desc: 'Our dedicated team ensures a ~20-25 minute response time for technical inquiries and quotation requests.' 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 bg-white flex flex-col h-full border-r border-b border-gray-100 last:border-r-0 lg:border-b-0 hover:bg-gray-50 transition-colors group`}
              >
                <div className="mb-6 relative">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-black group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <span className="absolute top-0 right-0 font-mono text-[10px] text-gray-400 opacity-50 uppercase tracking-tighter">{item.stat}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-brand-black group-hover:text-brand-orange transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-brand-gray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div className="max-w-2xl">
              <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-2 text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-orange"></span> Our Products
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
                Industrial & Commercial Racks
              </h2>
            </div>
            
            <div className="mt-8 md:mt-0 flex gap-4">
              <button 
                onClick={() => setShowAIVisualizer(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
                title="AI Studio Integration"
              >
                <Camera size={20}/> AI Visualizer
              </button>
              
              <a href="/catalog.pdf" target="_blank" rel="noopener noreferrer" download className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-brand-black transition-all shadow-lg hover:shadow-xl">
                <Download size={20}/> Download Catalog
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-[#222] rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(255,90,0,0.15)] hover:-translate-y-2 transition-all duration-300 border border-gray-800 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-brand-black/40">
                    <button 
                      onClick={() => {
                        setSelectedProduct(product);
                        setCurrentImageIndex(0);
                      }}
                      className="bg-brand-orange text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-brand-orange transition-colors">{product.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {product.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] bg-[#333] px-2 py-1 rounded text-gray-300 uppercase font-bold tracking-wider">Customizable</span>
                    <span className="text-[10px] bg-[#333] px-2 py-1 rounded text-gray-300 uppercase font-bold tracking-wider">Heavy Load</span>
                  </div>
                  <div className="pt-4 border-t border-gray-800 flex justify-between items-center mt-auto">
                    <button 
                      onClick={() => toggleCompare(product)}
                      className={`text-xs font-bold uppercase transition-colors flex items-center gap-1 ${compareList.find(p => p.name === product.name) ? 'text-brand-orange' : 'text-gray-500 hover:text-white'}`}
                    >
                      <Search size={14} /> {compareList.find(p => p.name === product.name) ? 'Compared' : 'Compare'}
                    </button>
                    <a href="#contact" className="text-brand-orange text-xs font-bold uppercase hover:underline">Get Price</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-brand-black/50 border border-gray-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Need a custom dimension or color coating?</h3>
              <p className="text-gray-400">We manufacture custom SAR Series (SAR001–SAR006) and slotted rack panels to your exact specification.</p>
            </div>
            <a href="#contact" className="bg-white text-brand-black px-6 py-3 rounded-lg font-bold whitespace-nowrap hover:bg-brand-orange hover:text-white transition-colors">
              Request Custom Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
           >
            <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-2 text-sm justify-center flex items-center gap-2">
              <span className="w-8 h-0.5 bg-brand-orange"></span> End-to-End Solutions
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Beyond manufacturing, we offer a complete suite of services to ensure your storage infrastructure is efficient, safe, and durable.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               {
                 title: 'Custom Manufacturing',
                 desc: 'High-precision fabrication of slotted angle and heavy-duty racks using premium mild steel.',
                 icon: Factory,
                 stat: '01'
               },
               {
                 title: 'Professional Installation',
                 desc: 'Expert on-site assembly and installation by our trained technicians to ensure structural safety.',
                 icon: Wrench,
                 stat: '02'
               },
               {
                 title: 'Space Optimization',
                 desc: 'Advanced storage planning and 2D/3D layout design to maximize your facility\'s cubic capacity.',
                 icon: Search,
                 stat: '03'
               },
               {
                 title: 'Maintenance & Repair',
                 desc: 'Routine safety audits and repair services to keep your storage systems in peak condition.',
                 icon: ShieldCheck,
                 stat: '04'
               }
             ].map((service, i) => (
                <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:border-brand-orange hover:shadow-xl transition-all group relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <span className="text-6xl font-display font-bold text-brand-black">{service.stat}</span>
                   </div>
                   <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                      <service.icon size={28} className="text-brand-black group-hover:text-white transition-colors" />
                   </div>
                   <h4 className="font-bold text-xl mb-3 text-brand-black group-hover:text-brand-orange transition-colors">{service.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section id="gallery" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
           >
            <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-2 text-sm justify-center flex items-center gap-2">
              Inside Our Work
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black">Project Gallery</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((src, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg shadow-black/5"
              >
                <img 
                  src={src} 
                  alt="Gallery" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
                  onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.src = "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects / Clients Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
           >
            <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-2 text-sm justify-center flex items-center gap-2">
              Our Success Stories
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black">Prominent Corporate Clients</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">We take pride in our long-term relationships and successful large-scale project executions for leading companies.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow group"
              >
                {client.link ? (
                  <a href={client.link} target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-brand-black group-hover:text-brand-orange transition-colors">
                    {client.name}
                  </a>
                ) : (
                  <span className="font-bold text-sm text-brand-black">{client.name}</span>
                )}
                <div className="mt-2 w-8 h-1 bg-brand-orange/20 group-hover:w-16 group-hover:bg-brand-orange transition-all rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 bg-white border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-2 text-sm">Testimonials</h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-16">What Our Clients Say</h2>
            
            <div className="relative w-full max-w-4xl min-h-[300px] flex items-center justify-center">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: activeTestimonial === i ? 1 : 0,
                    x: activeTestimonial === i ? 0 : activeTestimonial < i ? 50 : -50,
                    scale: activeTestimonial === i ? 1 : 0.9,
                    zIndex: activeTestimonial === i ? 10 : 0
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 bg-gray-50 rounded-3xl border border-gray-100 ${activeTestimonial === i ? '' : 'pointer-events-none'}`}
                >
                  <div className="mb-6 text-brand-orange">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => <Star key={star} size={24} fill="currentColor" />)}
                    </div>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700 italic text-center leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-brand-black">{t.name}</h4>
                    <p className="text-brand-orange font-semibold">{t.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'bg-brand-orange w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-black text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-2 text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-orange"></span> Connect
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to optimize your space?
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                Contact Bilal Storage System for customized manufacturing of slotted angle racks, heavy-duty racks, and mezzanine floors in Mumbai.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full shrink-0 text-brand-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">Our Facility</h4>
                    <p className="text-gray-400">Shop No. 8/8, C Block, Vinoba Bhave Nagar, Near LIG Colony, Pipe Road, Kurla West, Mumbai – 400070, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full shrink-0 text-brand-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">Call Us Directly</h4>
                    <p className="text-gray-400">+91 9892944396 <br/>+91 9167613174 <br/>+91 7977575354</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full shrink-0 text-brand-orange">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">Email Us</h4>
                    <p className="text-gray-400">bilalstoragesystem@gmail.com <br/>bilalfabrication@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Digital Business Card */}
              <motion.div
                initial={{ opacity: 0, rotate: -2, y: 20 }}
                whileInView={{ opacity: 1, rotate: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer max-w-md mx-auto lg:mx-0"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20 transform group-hover:scale-[1.02] transition-transform duration-500">
                   <img 
                    src="input_file_0.png" 
                    alt="Rafiq Karle Business Card" 
                    className="w-full h-auto"
                   />
                </div>
                <div className="mt-4 flex flex-col items-center lg:items-start gap-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FFF]/50 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-brand-orange" /> Digital Business Card
                  </p>
                  <div className="flex gap-3">
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 uppercase tracking-tighter">Proprietor</span>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 uppercase tracking-tighter">Established 1994</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl text-brand-black lg:sticky lg:top-32 h-fit"
            >
              <h3 className="text-2xl font-display font-bold mb-6">Get a Fast Quote</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Requirement Type</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors">
                    <option>Slotted Angle Racks</option>
                    <option>Heavy Duty Racks</option>
                    <option>Mezzanine Floors</option>
                    <option>Custom Industrial Storage</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Message details</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors" placeholder="Tell us about the dimensions or load capacity needed..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-orange text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-black transition-colors">
                  Send Inquiry Now
                </button>
                <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                   <Clock size={16}/> We typically respond within 20-25 mins.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="bg-brand-black text-brand-orange p-1 rounded font-display font-bold text-xl border border-gray-700">BSS</div>
                 <div className="flex flex-col">
                    <span className="font-verdana font-bold text-xl leading-none text-white tracking-tighter">BILAL</span>
                    <span className="text-brand-orange text-[9px] font-bold uppercase tracking-widest leading-tight">Storage & System</span>
                 </div>
              </div>
              <p className="text-sm">Owner: Rafik Mehboob Karle</p>
              <p className="text-sm">GST: 27BEFPK9663B1ZE</p>
              <div className="mt-6 flex items-center gap-4">
                <a href="https://www.facebook.com/share/1B5Fqwhvbn/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full text-white hover:bg-[#1877F2] transition-colors" title="Facebook Page">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/bilal_storage_system?utm_source=qr&igsh=MXN0N3J3Z3Z3ZjFsag==" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full text-white hover:bg-[#E4405F] transition-colors" title="Instagram Page">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-brand-orange transition-colors">Products &amp; Catalog</a></li>
                <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
              </ul>

              <h4 className="text-white font-bold mt-8 mb-4 uppercase text-sm tracking-wider">Verified Profiles</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.indiamart.com/bilal-storage-system/profile.html?srsltid=AfmBOoqQM7V9ZtnjFcmVCTOAq7rtGvYzReK3nfesJLaqLkjqVQN5zfae" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors flex items-center gap-2">
                    IndiaMART Profile
                  </a>
                </li>
                <li>
                  <a href="https://www.justdial.com/Mumbai/Bilal-Storage-System-Near-LIG-Colony-Kurla-West/022PXX22-XX22-110921114736-R8E6_BZDET" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors flex items-center gap-2">
                    Justdial Profile
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Popular Searches</h4>
              <ul className="space-y-1 text-xs opacity-60">
                <li>Storage rack manufacturer Mumbai</li>
                <li>Slotted angle rack supplier Kurla</li>
                <li>Industrial storage systems Mumbai</li>
                <li>Heavy duty rack manufacturer India</li>
                <li>Warehouse storage solutions Mumbai</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Bilal Storage System. All rights reserved.</p>
            <p className="mt-2 md:mt-0 opacity-50">Designed for efficiency.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* Email Button */}
        <a 
          href="mailto:bilalstoragesystem@gmail.com,bilalfabrication@gmail.com?subject=Inquiry for Storage Systems" 
          className="bg-brand-orange text-white p-4 rounded-full shadow-[0_4px_14px_rgba(255,90,0,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(255,90,0,0.6)] transition-all flex items-center justify-center group relative"
          title="Send Email"
        >
          <Mail size={28} />
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Email for Quote
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919892944396" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center group relative"
          title="WhatsApp Chat"
        >
          <MessageSquare size={28} />
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* AI Visualizer Modal */}
      {showAIVisualizer && <AIVisualizer onClose={() => setShowAIVisualizer(false)} />}

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            onClick={() => setSelectedProduct(null)} 
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-md" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full relative z-[101] shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-[102] w-10 h-10 bg-brand-black/10 hover:bg-brand-black/20 rounded-full flex items-center justify-center transition-colors text-brand-black"
            >
              <X size={24} />
            </button>
            <div className="md:w-1/2 bg-gray-100 h-[300px] md:h-auto relative group">
              <img src={selectedProduct.images[currentImageIndex]} alt={selectedProduct.name} className="w-full h-full object-cover transition-all duration-500" />
              
              {/* Carousel Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
                  }}
                  className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 text-brand-black"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
                  }}
                  className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 text-brand-black"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedProduct.images.map((_: any, i: number) => (
                  <button 
                    key={i} 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(i);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentImageIndex === i ? 'bg-brand-orange w-8' : 'bg-white/60 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <h4 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Product Specifications</h4>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-black mb-6">{selectedProduct.name}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Our {selectedProduct.name} are engineered using high-quality mild steel, designed to optimize your warehouse efficiency with durable and customizable solutions.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-10">
                {selectedProduct.specs.map((spec: any, i: number) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 italic">
                    <span className="font-bold text-gray-400 uppercase text-xs tracking-wider">{spec.label}</span>
                    <span className="text-brand-black font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" onClick={() => setSelectedProduct(null)} className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-brand-black transition-colors flex-1 shadow-lg shadow-orange-500/20">
                  Request Pricing
                </a>
                <button 
                  onClick={() => {
                    toggleCompare(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="bg-gray-100 text-brand-black px-8 py-4 rounded-xl font-bold flex-1 hover:bg-gray-200 transition-colors"
                >
                  {compareList.find(p => p.name === selectedProduct.name) ? 'Remove from Compare' : 'Add to Compare'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Comparison Drawer */}
      <motion.div
        initial={false}
        animate={{ y: compareList.length > 0 ? 0 : 200 }}
        className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 pointer-events-none"
      >
        <div className="max-w-4xl mx-auto pointer-events-auto">
          <div className="bg-brand-black rounded-2xl shadow-2xl border border-white/10 p-4 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 flex gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {compareList.map((p, i) => (
                <div key={i} className="flex items-center gap-3 bg-brand-gray/50 p-2 rounded-xl pr-4 border border-white/5 shrink-0">
                  <img src={p.image} className="w-10 h-10 object-cover rounded-lg" />
                  <span className="text-white text-xs font-bold whitespace-nowrap">{p.name}</span>
                  <button onClick={() => toggleCompare(p)} className="text-gray-500 hover:text-white"><X size={14}/></button>
                </div>
              ))}
              {compareList.length < 3 && (
                <div className="flex items-center justify-center p-2 px-10 rounded-xl border border-dashed border-gray-700 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                  Add to compare
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <button 
                disabled={compareList.length < 2}
                onClick={() => setShowComparison(true)}
                className="bg-brand-orange text-white px-6 py-3 rounded-xl text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-brand-black transition-colors shadow-lg"
              >
                Compare ({compareList.length})
              </button>
              <button 
                 onClick={() => setCompareList([])}
                 className="bg-white/10 text-white p-3 rounded-xl hover:bg-red-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Comparison Modal */}
      {showComparison && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setShowComparison(false)} className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl overflow-hidden max-w-6xl w-full relative z-[111] shadow-2xl max-h-[90vh] flex flex-col"
          >
            <div className="p-8 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-brand-black font-brand">Product Comparison</h2>
              <button onClick={() => setShowComparison(false)} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500"><X size={20}/></button>
            </div>
            <div className="p-8 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left border-b-2 border-gray-100 bg-gray-50 w-1/4">Features</th>
                    {compareList.map((p, i) => (
                      <th key={i} className="p-4 text-center border-b-2 border-gray-100">
                        <img src={p.image} className="w-24 h-24 object-cover rounded-xl mx-auto mb-4 border border-gray-200" />
                        <span className="block font-display font-bold text-brand-black">{p.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[0,1,2,3].map(specIdx => (
                    <tr key={specIdx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-bold text-gray-400 uppercase text-[10px] tracking-widest border-b border-gray-100">
                        {compareList[0]?.specs[specIdx]?.label || 'Spec'}
                      </td>
                      {compareList.map((p, i) => (
                        <td key={i} className="p-4 text-center border-b border-gray-100 font-semibold text-brand-black">
                          {p.specs[specIdx]?.value || '-'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-gray-50 flex justify-center">
               <button onClick={() => setShowComparison(false)} className="text-brand-black font-bold flex items-center gap-2 hover:text-brand-orange transition-colors">
                 Close Comparison <ChevronRight size={18}/>
               </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* AI Visualizer Modal */}
      {showAIVisualizer && <AIVisualizer onClose={() => setShowAIVisualizer(false)} />}
    </div>
  );
}

