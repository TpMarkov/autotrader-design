"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  TrendingUp, 
  Building2, 
  CheckCircle2, 
  CarFront
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-black flex items-center justify-center text-white rounded-sm group-hover:scale-105 transition-transform">
              <CarFront className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">AutoSphere</span>
          </Link>
          
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:opacity-50 transition">Inventory</Link>
            <Link href="/about" className="opacity-50">About</Link>
            <a href="#" className="hover:opacity-50 transition">Sell</a>
            <a href="#" className="hover:opacity-50 transition">Contact</a>
          </div>

          <Link 
            href="/"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition"
          >
            <span>Try API Tester</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative h-[90vh] overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=2000" 
            alt="Person driving a modern car on open road" 
            fill
            className="object-cover"
            priority
          />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-car-engine-43033-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase text-white mb-8 leading-[0.9]">
              Smarter Car <br />
              <span className="serif italic lowercase tracking-normal font-normal">Decisions Start Here</span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl max-w-2xl font-medium serif italic leading-relaxed">
              We help you find the right car at the right price with confidence,
              using real-time market insights and trusted data.
            </p>
          </motion.div>
        </div>
      </header>

      {/* VALUE PROPOSITION */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">What You Get</h2>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase">Value Proposition</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Find the Best Deals",
                desc: "Instantly compare thousands of cars and discover deals that save you money.",
                img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
                icon: <Search className="w-6 h-6" />
              },
              {
                title: "Know the True Price",
                desc: "Understand what a car is really worth before you buy or sell.",
                img: "https://images.unsplash.com/photo-1583121274602-3e2820bc6988?auto=format&fit=crop&q=80&w=1200",
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: "Make Confident Decisions",
                desc: "Get clear, reliable insights so you never overpay or miss a great opportunity.",
                img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200",
                icon: <CheckCircle2 className="w-6 h-6" />
              }
            ].map((item, idx) => (
              <motion.article 
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white p-12 border border-gray-100 space-y-8"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-300">0{idx + 1}</span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 serif italic leading-relaxed">{item.desc}</p>
                </div>
                <div className="relative aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER BENEFITS */}
      <section className="py-32 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">Built for Real People</h2>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase">Customer Benefits</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Car Buyers",
                desc: "Find your perfect car faster and avoid overpaying with transparent market data.",
                img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200",
                icon: <Search className="w-6 h-6" />
              },
              {
                title: "Car Sellers",
                desc: "Price your car competitively and attract serious buyers quickly.",
                img: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=1200",
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                title: "Dealerships",
                desc: "Stay ahead of the market with insights that help you price and sell smarter.",
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
                icon: <Building2 className="w-6 h-6" />
              }
            ].map((item, idx) => (
              <motion.article 
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white p-12 border border-gray-100 space-y-8"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-300">0{idx + 1}</span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 serif italic leading-relaxed">{item.desc}</p>
                </div>
                <div className="relative aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center text-black">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Why People Trust Us</h2>
              </div>
              <h3 className="text-5xl font-bold tracking-tighter uppercase leading-[1.1]">
                Accurate and <span className="serif italic lowercase tracking-normal font-normal">up-to-date car market data.</span>
              </h3>
              
              <ul className="space-y-6">
                {[
                  "Accurate and up-to-date car market data",
                  "Transparent pricing insights",
                  "Easy-to-use experience",
                  "Designed to save time and money"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <CheckCircle2 className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                    <span className="font-bold uppercase text-xs tracking-widest">{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <Image 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Customer trust and satisfaction" 
                  fill
                  className="object-cover opacity-60"
                />
              </div>
              <div className="relative aspect-video bg-white/5 overflow-hidden group">
                <video 
                  controls 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-car-engine-parts-working-43034-large.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200" 
                alt="Driving lifestyle" 
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-12">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Experience the Difference</h2>
              <h3 className="text-5xl font-bold tracking-tighter uppercase leading-[1.1]">
                Clarity to <span className="serif italic lowercase tracking-normal font-normal">move forward with confidence.</span>
              </h3>
              <p className="text-xl text-gray-500 serif italic leading-relaxed">
                Whether you&apos;re buying your first car or managing a full inventory,
                we give you the clarity you need to move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">Explore Cars</h2>
            <h3 className="text-5xl font-bold tracking-tighter uppercase">Visual Showcase</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200" alt="Sports car" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mt-12">
              <Image src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" alt="SUV vehicle" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200" alt="Electric car" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mt-12">
              <Image src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1200" alt="Luxury car interior" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200" alt="Convertible car on open road" fill className="object-cover" />
            </div>
          </div>

          <div className="relative aspect-video bg-black overflow-hidden">
            <video 
              controls 
              className="w-full h-full object-cover opacity-70"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-car-driving-on-the-highway-at-night-43035-large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 bg-black text-white text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-12 leading-[0.9]">
            Start Your <br />
            <span className="serif italic lowercase tracking-normal font-normal">Journey</span>
          </h2>
          <p className="text-white/50 text-xl md:text-2xl mb-16 serif italic">
            Discover better deals, smarter pricing, and a simpler way to navigate the car market.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-gray-200 transition-all group"
          >
            <span>Explore Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white rounded-sm">
              <CarFront className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase">AutoSphere</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            &copy; 2026 AutoSphere. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:opacity-50 transition">Privacy</a>
            <a href="#" className="hover:opacity-50 transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
