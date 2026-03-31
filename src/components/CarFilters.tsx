"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MapPin, Search, SlidersHorizontal, X } from "lucide-react";
import { USAMapFilter } from "./USAMapFilter";

export const CarFilters: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="w-full bg-white border-b border-gray-100 sticky top-20 z-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 flex items-center gap-6">
        {/* Search Input */}
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
          <input 
            type="text" 
            placeholder="Search make, model, or keywords..." 
            className="w-full bg-gray-50 border border-transparent focus:border-black focus:bg-white px-12 py-3 rounded-full text-sm outline-none transition-all"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex items-center gap-2">
          <FilterButton 
            label="Condition" 
            active={activeDropdown === 'condition'} 
            onClick={() => toggleDropdown('condition')} 
          />
          <FilterButton 
            label="Price" 
            active={activeDropdown === 'price'} 
            onClick={() => toggleDropdown('price')} 
          />
          <FilterButton 
            label="Year" 
            active={activeDropdown === 'year'} 
            onClick={() => toggleDropdown('year')} 
          />
          
          {/* Location Filter with USA Map */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('location')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all border ${
                activeDropdown === 'location' || selectedState 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-black border-gray-200 hover:border-black'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{selectedState ? `Location: ${selectedState}` : 'Location'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'location' ? 'rotate-180' : ''}`} />
            </button>

            {/* The Dropdown that takes remaining width */}
            <AnimatePresence>
              {activeDropdown === 'location' && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setActiveDropdown(null)}
                    className="fixed inset-0 bg-black/5 z-[-1]"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 mt-4 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden z-50"
                    style={{ 
                      width: 'calc(100vw - 48px)', // Remaining width (approx)
                      maxWidth: '1200px',
                      right: '0',
                      transformOrigin: 'top right'
                    }}
                  >
                    <div className="p-1 flex flex-col md:flex-row h-[600px]">
                      {/* Sidebar for quick selection */}
                      <div className="w-full md:w-64 bg-gray-50 p-8 border-r border-gray-100 overflow-y-auto">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Popular Regions</h4>
                        <div className="space-y-4">
                          {['California', 'Texas', 'Florida', 'New York', 'Illinois'].map(state => (
                            <button 
                              key={state}
                              onClick={() => setSelectedState(state.slice(0,2).toUpperCase())}
                              className="block w-full text-left text-sm font-medium hover:text-gray-500 transition"
                            >
                              {state}
                            </button>
                          ))}
                        </div>
                        
                        <div className="mt-12 pt-12 border-t border-gray-200">
                          <button 
                            onClick={() => setSelectedState(null)}
                            className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 hover:text-red-600 transition"
                          >
                            Clear Filter
                          </button>
                        </div>
                      </div>

                      {/* Map Area */}
                      <div className="flex-1 relative bg-white">
                        <button 
                          onClick={() => setActiveDropdown(null)}
                          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition z-10"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        
                        <USAMapFilter 
                          selectedState={selectedState}
                          onSelectState={(abbr) => {
                            setSelectedState(abbr);
                            // We could close it here, but user might want to see selection
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button className="p-3 bg-gray-50 hover:bg-black hover:text-white rounded-full transition-all border border-gray-100 hover:border-black">
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const FilterButton: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all border ${
      active 
      ? 'bg-black text-white border-black' 
      : 'bg-white text-black border-gray-200 hover:border-black'
    }`}
  >
    <span>{label}</span>
    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${active ? 'rotate-180' : ''}`} />
  </button>
);
