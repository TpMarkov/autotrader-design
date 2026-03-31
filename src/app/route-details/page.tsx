"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  CarFront, 
  ArrowRight, 
  Anchor, 
  Ship, 
  MapPin, 
  AlertTriangle, 
  ChevronRight,
  Info,
  DollarSign,
  Truck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RouteDetailsPage() {
  const carData = {
    name: "2024 Ford Mustang Dark Horse",
    price: 25987,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
  };

  const costs = [
    { label: "Car Price", value: 25987, isBold: false },
    { label: "Inland Transport (USA)", value: 495, isBold: false },
    { label: "Ocean Shipping (SUV, Container)", value: 1760, isBold: false },
    { label: "Customs Duty (10%)", value: 2599, isBold: false },
    { label: "VAT (20%)", value: 6056, isBold: false },
    { label: "Processing Fees", value: 1000, isBold: false },
  ];

  const totalLandedCost = 37337;
  const totalBgn = 73099;

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-black flex items-center justify-center text-white rounded-sm group-hover:scale-110 transition-transform">
              <CarFront className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">AutoSphere</span>
          </Link>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:opacity-50 transition">Inventory</Link>
            <Link href="/route-details" className="opacity-50">Shipping</Link>
            <Link href="/about" className="hover:opacity-50 transition">About</Link>
            <Link href="/tester" className="hover:opacity-50 transition">API Tester</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Car Header Section */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
              <span className="w-8 h-px bg-gray-300"></span>
              Vehicle Details
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
              {carData.name}
            </h1>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl font-bold tracking-tight">${carData.price.toLocaleString()}</span>
              <span className="text-gray-400 text-sm uppercase tracking-widest font-bold">Base Price</span>
            </div>
            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-gray-800 transition-all">
                Reserve Vehicle
              </button>
              <button className="border border-gray-200 px-8 py-4 font-bold uppercase text-[10px] tracking-widest hover:bg-gray-50 transition-all">
                Download Specs
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video lg:aspect-square overflow-hidden bg-gray-100 rounded-sm"
          >
            <Image 
              src={carData.image}
              alt={carData.name}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Shipping Route Visualization */}
          <section className="lg:col-span-2 space-y-12">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tighter uppercase">Shipping Route</h2>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                Global Logistics
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-[21/9] bg-gray-50 border border-gray-100 rounded-sm overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
                alt="Route Map"
                fill
                className="object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-2xl px-12">
                  {/* Visual Route Line */}
                  <div className="absolute top-1/2 left-12 right-12 h-px bg-dashed border-t border-dashed border-black/20 -translate-y-1/2"></div>
                  
                  <div className="relative flex justify-between items-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-xl">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest">Houston, TX</span>
                    </div>
                    
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-black shadow-sm animate-pulse">
                      <Ship className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-xl">
                        <Anchor className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest">Varna, BG</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-6">
              {[
                { 
                  icon: <Truck className="w-5 h-5" />, 
                  title: "Departure: Houston", 
                  detail: "Inland Distance: 413 mi",
                  status: "Origin"
                },
                { 
                  icon: <Ship className="w-5 h-5" />, 
                  title: "Ocean Shipping to Rotterdam", 
                  detail: "Transatlantic Container Service",
                  status: "Transit"
                },
                { 
                  icon: <Anchor className="w-5 h-5" />, 
                  title: "Arrival at Varna/Burgas", 
                  detail: "Final Destination Processing",
                  status: "Destination"
                }
              ].map((step, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 border border-gray-100 hover:border-black transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm group-hover:bg-black group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{step.status}</div>
                    <div className="font-bold uppercase tracking-tight">{step.title}</div>
                    <div className="text-sm text-gray-500 serif italic">{step.detail}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Landed Cost Breakdown */}
          <section className="space-y-8">
            <div className="bg-gray-50 p-8 md:p-12 border border-gray-100">
              <div className="flex items-center gap-3 mb-12">
                <DollarSign className="w-6 h-6" />
                <h2 className="text-2xl font-bold tracking-tighter uppercase">Landed Cost</h2>
              </div>

              <div className="space-y-6 mb-12">
                {costs.map((cost, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">{cost.label}</span>
                    <span className="font-mono text-sm">${cost.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t-2 border-black space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Total Landed Cost</span>
                  <span className="text-3xl font-bold tracking-tighter">${totalLandedCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Approx. BGN</span>
                  <span className="font-bold tracking-tight text-black">{totalBgn.toLocaleString()} BGN</span>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white border border-gray-100 flex items-start gap-4">
                <Info className="w-5 h-5 text-gray-400 shrink-0" />
                <p className="text-[10px] leading-relaxed text-gray-500 uppercase tracking-widest font-medium">
                  Calculated based on current exchange rates and standard port fees. Subject to change.
                </p>
              </div>
            </div>

            {/* Notes & Disclaimers */}
            <div className="p-6 border border-amber-100 bg-amber-50/30 flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
              <p className="text-xs text-amber-900 leading-relaxed serif italic">
                Estimated values. Actual shipping cost may vary based on route, port fees, or exchange rates at the time of processing.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white rounded-sm">
              <CarFront className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase">AutoSphere</span>
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
            &copy; 2026 AutoSphere Logistics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
