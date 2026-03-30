"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  CarFront,
  ArrowRight
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-black flex items-center justify-center text-white rounded-sm">
              <CarFront className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">AutoSphere</span>
          </Link>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:opacity-50 transition">Inventory</Link>
            <Link href="/about" className="opacity-50">About</Link>
            <Link href="/tester" className="hover:opacity-50 transition">API Tester</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[80vh] flex items-center bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2400"
            alt="Sleek American cars on the road"
            fill
            className="object-cover opacity-60"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase text-white mb-8 leading-[0.9]">
              See the Full <br />
              <span className="text-white/40 italic lowercase tracking-normal font-normal serif">Automotive Market</span> <br />
              With Clarity
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed mb-12 serif italic">
              We bring real automotive market data to you — helping you find great cars, understand value, and make smarter decisions.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                href="/tester"
                className="bg-white text-black px-10 py-5 font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-all"
              >
                Explore Market Data
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* What You Can Discover */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-16">What You Can Discover</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <article className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-tight">Find Cars Fast</h3>
              <p className="text-gray-500 leading-relaxed">
                Access millions of vehicle listings pulled from dealer inventories, private sellers, and auctions across North America in real time.
              </p>
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <Image 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
                  alt="Row of cars at dealership"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </article>

            <article className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-tight">Real Value Insights</h3>
              <p className="text-gray-500 leading-relaxed">
                Understand pricing trends and current market values so you never overpay — whether shopping used or certified cars.
              </p>
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <Image 
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800"
                  alt="Car pricing and analytics conceptual image"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </article>

            <article className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-tight">Know Every Vehicle</h3>
              <p className="text-gray-500 leading-relaxed">
                Get full vehicle specs and history with VIN decoding and detailed listing views — from features to past sales records.
              </p>
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <Image 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800"
                  alt="Car details close‑up showing quality and build"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-16">Designed for Real Automotive Users</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <article className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-tight">Car Buyers</h3>
              <p className="text-gray-500 leading-relaxed">
                Find the right car at the right price, supported by transparent data and real listings.
              </p>
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                <Image 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
                  alt="Car buyers exploring a luxury vehicle"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </article>

            <article className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-tight">Dealers & Sellers</h3>
              <p className="text-gray-500 leading-relaxed">
                Showcase cars with accurate specs and pricing that attract serious buyers faster.
              </p>
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                <Image 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt="Dealership inventory with premium vehicles"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </article>

            <article className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-tight">Market Professionals</h3>
              <p className="text-gray-500 leading-relaxed">
                Use deep data insights for pricing strategy, trend tracking, and historical comparisons.
              </p>
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                <Image 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800"
                  alt="Car analytics and market study imagery"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">Why People Rely On This Tool</h2>
              
              <ul className="space-y-8">
                {[
                  "Trusted listings aggregated daily from dealers and private sellers",
                  "Reliable price and trend insights for confident decisions",
                  "Instant VIN decoding revealing true vehicle data"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    <span className="text-lg text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden bg-gray-900">
              <Image 
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
                alt="Premium cars lined up — trust and quality"
                fill
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-16">Car Gallery — Real Market Examples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800"
                alt="Classic Ford Mustang car"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
                alt="Luxury car on scenic drive"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800"
                alt="Detailed luxury car interior study"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-32 md:py-48 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">Start Exploring the Market</h2>
          <p className="text-xl text-gray-500 mb-12">
            Begin your car search powered by real data and extensive automotive insights.
          </p>
          <Link 
            href="/tester"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 font-bold uppercase text-xs tracking-widest hover:bg-gray-800 transition-all group"
          >
            <span>Explore Listings & Tools</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white rounded-sm">
              <CarFront className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase">AutoSphere</span>
          </div>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
            &copy; 2026 Automotive Market Insights. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
