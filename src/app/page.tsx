"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tag, CarFront, Loader2, ArrowRight, AlertCircle, Gauge, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CarFilters } from "@/components/CarFilters";

interface CarListing {
// ... existing interface ...
  id: string;
  vin: string;
  heading: string;
  price: number;
  miles: number;
  exterior_color: string;
  media?: { photo_links?: string[] };
  build?: {
    year: number;
    make: string;
    model: string;
    body_type: string;
    transmission: string;
    engine: string;
  };
  dealer?: {
    city: string;
    state: string;
    name: string;
  };
}

export default function AutoTrader() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [listings, setListings] = useState<CarListing[]>([]);
  const [totalFound, setTotalFound] = useState(0);
  const [page, setPage] = useState(0);

  // Filters
  const [filters] = useState({
    make: "",
    model: "",
    year_min: "",
    year_max: "",
    price_max: "",
    body_type: "",
    car_type: "used"
  });

  const fetchInventory = useCallback(async (isLoadMore = false) => {
    try {
      setError(null);
      if (!isLoadMore) {
        setLoading(true);
        setPage(0);
      }

      const queryParams = new URLSearchParams();
      queryParams.append("endpoint", "/v2/search/car/active");

      if (filters.make) queryParams.append("make", filters.make);
      if (filters.model) queryParams.append("model", filters.model);
      if (filters.year_min) queryParams.append("year_min", filters.year_min);
      if (filters.year_max) queryParams.append("year_max", filters.year_max);
      if (filters.price_max) queryParams.append("price_max", filters.price_max);
      if (filters.body_type) queryParams.append("body_type", filters.body_type);
      if (filters.car_type) queryParams.append("car_type", filters.car_type);

      queryParams.append("start", (isLoadMore ? (page + 1) * 50 : 0).toString());
      queryParams.append("rows", "50");

      const res = await fetch(`/api/proxy?${queryParams.toString()}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch inventory");
      }

      if (isLoadMore) {
        setListings(prev => [...prev, ...(data.listings || [])]);
        setPage(prev => prev + 1);
      } else {
        setListings(data.listings || []);
        setTotalFound(data.num_found || 0);
      }
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred";
      console.error(e);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-black flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform">
              <CarFront className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">AutoSphere</span>
          </Link>

          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:opacity-50 transition">Inventory</Link>
            <Link href="/route-details" className="hover:opacity-50 transition">Shipping</Link>
            <Link href="/about" className="hover:opacity-50 transition">About</Link>
            <Link href="/tester" className="hover:opacity-50 transition">API Tester</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Car"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
              DRIVE THE <br /> FUTURE.
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl font-medium mb-12 serif italic">
              Experience the world&apos;s most curated collection of premium vehicles, delivered with uncompromising service.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('inventory');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-3 hover:bg-gray-100 transition-all"
            >
              Explore Inventory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters Bar */}
      <CarFilters />

      {/* Main Content */}
      <main id="inventory" className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">

        {/* Error State */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12"
            >
              <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                <div>
                  <h3 className="text-red-900 font-bold mb-1">Connection Error</h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    {error}. Please check your <code className="bg-red-100 px-1 rounded">MARKETCHECK_API_KEY</code> in the environment settings.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">Inventory</h2>
            <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
              <span>{totalFound.toLocaleString()} Available</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>Worldwide Shipping</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        {loading && page === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-6">
                <div className="aspect-[4/3] bg-gray-100 animate-pulse rounded-sm"></div>
                <div className="h-8 bg-gray-100 animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-100 animate-pulse w-1/2"></div>
              </div>
            ))}
          </div>
        ) : listings.length === 0 ? (
          <div className="py-32 text-center border-y border-gray-100">
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">No results found</h3>
            <p className="text-gray-400 serif italic">Try adjusting your filters to find your perfect match.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {listings.map((car, idx) => (
              <motion.div
                key={`${car.id}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="group"
              >
                <Link href={`/car/${car.id}`} className="block space-y-6">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm">
                    {car.media?.photo_links?.[0] ? (
                      <Image
                        src={car.media.photo_links[0]}
                        alt={car.heading}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        <CarFront className="h-12 w-12" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                      {car.build?.year}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
                        {car.heading}
                      </h3>
                      <span className="text-xl font-bold tracking-tight">
                        {car.price > 0 ? `$${car.price.toLocaleString()}` : "POA"}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3 h-3" />
                        {car.miles ? `${car.miles.toLocaleString()} mi` : "N/A"}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {car.dealer ? `${car.dealer.city}, ${car.dealer.state}` : "Unknown"}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Tag className="w-3 h-3" />
                        {car.exterior_color || "Any"}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Load More */}
        {listings.length > 0 && (
          <div className="mt-32 flex justify-center">
            <button
              onClick={() => fetchInventory(true)}
              disabled={loading}
              className="group flex flex-col items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-50 transition"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <span>Load More</span>
                  <div className="w-px h-12 bg-black group-hover:h-16 transition-all"></div>
                </>
              )}
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-24 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-sm space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black flex items-center justify-center rounded-sm">
                <CarFront className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">AutoSphere</span>
            </Link>
            <p className="text-gray-400 serif italic leading-relaxed">
              Redefining the automotive marketplace through curated excellence and unparalleled digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-24 gap-y-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Inventory</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-black transition">New Arrivals</a></li>
                <li><a href="#" className="hover:text-black transition">Electric</a></li>
                <li><a href="#" className="hover:text-black transition">Luxury</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-black transition">Our Story</Link></li>
                <li><a href="#" className="hover:text-black transition">Careers</a></li>
                <li><a href="#" className="hover:text-black transition">Press</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Support</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-black transition">Contact</a></li>
                <li><a href="#" className="hover:text-black transition">FAQ</a></li>
                <li><a href="#" className="hover:text-black transition">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-24 pt-12 border-t border-gray-200 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <span>&copy; 2026 AutoSphere</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition">Instagram</a>
            <a href="#" className="hover:text-black transition">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
