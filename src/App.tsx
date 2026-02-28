/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Globe, 
  Cpu, 
  Cloud, 
  Infinity,
  Send,
  Database,
  Layers,
  Info,
  Terminal,
  User,
  BookOpen
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Talent', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Insights', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-8",
      isScrolled ? "bg-white/60 backdrop-blur-xl shadow-sm py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-9 h-9 bg-[#2d3643] rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/10 group-hover:scale-105 transition-transform duration-300">
            <Infinity className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-[#2d3643]">Centillion Labs</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[14px] font-semibold text-slate-500 hover:text-[#2d3643] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button className="text-[14px] font-bold text-[#2d3643] hover:opacity-70 transition-opacity">Log In</button>
          <button className="bg-[#2d3643] text-white text-[14px] font-bold px-6 py-2.5 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-[#2d3643]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-8 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-bold text-[#2d3643]">
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100" />
              <button className="text-lg font-bold text-[#2d3643] text-left">Log In</button>
              <button className="bg-[#2d3643] text-white text-lg font-bold px-6 py-4 rounded-xl">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden min-h-screen flex flex-col">
      {/* Background Atmosphere - Exact Colors from Screenshot */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[70%] h-[70%] bg-pink-100/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-[5%] right-[-10%] w-[60%] h-[60%] bg-blue-100/30 rounded-full blur-[140px]" />
        <div className="absolute top-[15%] right-[5%] w-[45%] h-[45%] bg-amber-50/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-[84px] font-bold leading-[0.92] tracking-tight text-[#2d3643] mb-10">
            Access World-<br />Class <br />
            <span className="text-gradient">AI & Cloud</span> <br />
            Talent <br />
            Accelerated <br />
            Innovation
          </h1>
          <p className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed font-medium">
            Connect with the top 1% of engineers and researchers. 
            Scale your AI initiatives instantly with vetted experts.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-[#2d3643] text-white px-9 py-4.5 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20 group">
              Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2.5 bg-white/60 backdrop-blur-md border border-white/60 px-5 py-2.5 rounded-full shadow-sm"
            >
              <Send className="w-3.5 h-3.5 text-purple-500 rotate-[-15deg]" />
              <span className="text-[14px] font-bold text-slate-600 italic">Sarah just joined</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Orbit Visual - Exact Replication */}
          <div className="relative w-[360px] h-[360px] md:w-[620px] md:h-[620px] flex items-center justify-center">
            {/* Concentric Orbit Lines */}
            <div className="absolute inset-0 border border-slate-200 rounded-full opacity-20" />
            <div className="absolute inset-[18%] border border-slate-200 rounded-full opacity-40" />
            <div className="absolute inset-[36%] border border-slate-200 rounded-full opacity-60" />
            
            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <span className="text-7xl md:text-[100px] font-bold text-[#2d3643] leading-none">100+</span>
              <span className="text-xs md:text-sm font-bold tracking-[0.4em] text-slate-400 uppercase mt-3">Experts</span>
            </div>

            {/* Orbiting Elements - Exact Positions and Icons */}
            
            {/* Pink Code Card */}
            <OrbitItem className="top-[40%] left-[-5%]" delay={0.2}>
              <div className="w-14 h-14 glass-card flex items-center justify-center p-2">
                <div className="w-full h-full bg-pink-50 rounded-lg flex items-center justify-center border border-pink-100">
                  <Terminal className="w-6 h-6 text-pink-500" />
                </div>
              </div>
            </OrbitItem>

            {/* Purple Brain Card */}
            <OrbitItem className="bottom-[35%] left-[15%]" delay={0.8}>
              <div className="w-14 h-14 glass-card flex items-center justify-center p-2">
                <div className="w-full h-full bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100">
                  <User className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </OrbitItem>

            {/* Blue Cloud Card */}
            <OrbitItem className="bottom-[45%] right-[22%]" delay={1.4}>
              <div className="w-14 h-14 glass-card flex items-center justify-center p-2">
                <div className="w-full h-full bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                  <Cloud className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </OrbitItem>

            {/* Green Document Card */}
            <OrbitItem className="top-[30%] right-[3%]" delay={2}>
              <div className="w-14 h-14 glass-card flex items-center justify-center p-2">
                <div className="w-full h-full bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </OrbitItem>

            {/* Tan 3D Object Card */}
            <OrbitItem className="bottom-[10%] right-[15%]" delay={2.6}>
              <div className="w-16 h-16 glass-card overflow-hidden p-1">
                <div className="w-full h-full bg-[#f5e6d3] rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white rounded-full shadow-inner" />
                </div>
              </div>
            </OrbitItem>

            {/* Gold Circle Card */}
            <OrbitItem className="top-[12%] right-[18%]" delay={3.2}>
              <div className="w-14 h-14 glass-card flex items-center justify-center p-2">
                <div className="w-full h-full bg-amber-50 rounded-lg flex items-center justify-center border border-amber-100">
                  <div className="w-6 h-6 border-2 border-amber-400 rounded-full" />
                </div>
              </div>
            </OrbitItem>
          </div>
        </motion.div>
      </div>

      {/* Bottom Logo Rail - Exact Icons and Spacing */}
      <div className="mt-auto py-16 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <LogoItem icon={<Menu className="w-5 h-5" />} name="DataFlow" />
            <LogoItem icon={<Globe className="w-5 h-5" />} name="CloudCore" />
            <LogoItem icon={<Database className="w-5 h-5" />} name="NexusAI" />
            <LogoItem icon={<Layers className="w-5 h-5" />} name="StrataSphere" />
            <LogoItem icon={<Info className="w-5 h-5" />} name="InfoSys" />
          </div>
        </div>
      </div>
    </section>
  );
};

const OrbitItem = ({ children, className, delay }: { children: React.ReactNode, className: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1,
      y: [0, -25, 0],
      x: [0, 15, 0],
      rotate: [0, 5, 0],
    }}
    transition={{ 
      opacity: { duration: 0.8, delay: delay * 0.1 },
      y: { duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay: delay * 0.2 },
      x: { duration: 8 + delay, repeat: Infinity, ease: "easeInOut", delay: delay * 0.1 },
      rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
    }}
    className={cn("absolute z-20", className)}
  >
    {children}
  </motion.div>
);

const LogoItem = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
  <div className="flex items-center gap-3 font-bold text-[#2d3643] text-xl tracking-tight">
    {icon}
    <span>{name}</span>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
      </main>
      {/* Footer and other sections omitted for brevity in this turn, 
          but they would follow the same theme refinement. */}
    </div>
  );
}
