import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Calendar, Award } from 'lucide-react';
import { HERO_SLIDES, FEATURES, STATS, NOTICES, PRINCIPAL_MSG } from '../constants';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Slider logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transform scale-105 animate-[kenburns_20s_infinite_alternate]"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl font-light mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards] drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_1s_ease-out_1.1s_forwards]">
                  <button className="bg-gold-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-600 transition-all hover:scale-105 shadow-lg">
                    Admissions Open
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105">
                    Explore Campus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-gold-500 w-8' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Notice Board & Stats Ticker */}
      <section className="bg-royal-900 text-white py-4 relative z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-royal-800 px-4 py-1 rounded text-xs font-bold uppercase tracking-wider text-gold-400">
            Latest News
          </div>
          <div className="flex-1 overflow-hidden relative h-6 w-full">
             <div className="absolute animate-[marquee_15s_linear_infinite] whitespace-nowrap">
               {NOTICES.map(n => (
                 <span key={n.id} className="mx-8 text-sm font-light">
                   <span className="text-gold-400 font-bold mr-2">[{n.date}]</span>
                   {n.title}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-full z-0 opacity-50"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/600/700?random=10" 
                  alt="Principal" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-gold-500 z-20 max-w-xs">
                <p className="font-serif font-bold text-xl text-royal-900">Fr. Principal Name</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Principal, St. Joseph's</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <span className="text-gold-500 font-bold tracking-wider uppercase text-sm">Welcome to St. Joseph's</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-royal-900 leading-tight">
                Nurturing Excellence, <br/>Building Character.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-gray-200 pl-6">
                {PRINCIPAL_MSG}
              </p>
              <button className="group flex items-center gap-2 text-royal-800 font-semibold hover:text-gold-600 transition-colors">
                Read Full Message <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-royal-900 mb-4">Why Choose St. Joseph's?</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-gold-400 group">
                <div className="w-14 h-14 bg-royal-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-royal-900 transition-colors duration-300">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-8 h-8 text-royal-900 group-hover:text-gold-400 transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Parallax */}
      <section className="py-24 bg-royal-900 relative overflow-hidden bg-fixed" style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?blur=2")', backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white font-serif">
                  {stat.value}<span className="text-gold-500">{stat.suffix}</span>
                </div>
                <div className="text-gray-300 uppercase tracking-widest text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notices & Events Split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Notices Board */}
            <div className="lg:col-span-1 bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-royal-900 p-6 flex justify-between items-center text-white">
                <h3 className="font-bold text-lg flex items-center gap-2">
                   <Award size={20} className="text-gold-400" /> Notice Board
                </h3>
              </div>
              <div className="p-2 h-[400px] overflow-y-auto">
                {NOTICES.map((notice) => (
                  <div key={notice.id} className="p-4 border-b border-gray-100 hover:bg-slate-50 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400">{notice.date}</span>
                      {notice.isNew && <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>}
                    </div>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-royal-800 transition-colors">{notice.title}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                <button className="text-royal-800 text-sm font-bold hover:underline">View All Notices</button>
              </div>
            </div>

            {/* Gallery Grid Mini */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex justify-between items-end">
                <div>
                   <h2 className="text-3xl font-serif font-bold text-royal-900">Campus Life</h2>
                   <p className="text-gray-500 mt-2">Glimpses of activities and events at St. Joseph's.</p>
                </div>
                <button className="hidden sm:flex items-center gap-1 text-gold-600 font-semibold hover:text-gold-700">
                  View Gallery <ChevronRight size={18} />
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[400px]">
                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group">
                  <img src="https://picsum.photos/800/800?random=20" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="rounded-xl overflow-hidden relative group">
                  <img src="https://picsum.photos/400/400?random=21" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery" />
                </div>
                <div className="rounded-xl overflow-hidden relative group">
                  <img src="https://picsum.photos/400/400?random=22" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-black opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Start Your Journey With Us</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Admission open for the academic session 2024-25. Give your child the gift of world-class education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gold-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-royal-50 transition-colors">
              Apply Online
            </button>
            <button className="bg-royal-900 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-royal-800 transition-colors">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;