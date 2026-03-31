"use client";

import React, { useState } from "react";
import USAMap from "react-usa-map";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, X } from "lucide-react";

interface USAMapFilterProps {
  onSelectState?: (stateAbbr: string) => void;
  selectedState?: string | null;
}

const stateNames: { [key: string]: string } = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming"
};

export const USAMapFilter: React.FC<USAMapFilterProps> = ({ onSelectState, selectedState }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mapHandler = (event: React.MouseEvent<SVGPathElement>) => {
    const target = event.target as SVGPathElement;
    const stateAbbr = target.dataset.name;
    if (stateAbbr && onSelectState) {
      onSelectState(stateAbbr);
    }
  };

  const statesCustomConfig = () => {
    const config: Record<string, { fill: string }> = {};
    if (selectedState) {
      config[selectedState] = {
        fill: "#000000",
      };
    }
    return config;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="relative w-full h-full flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-sm border border-gray-100"
      onMouseMove={handleMouseMove}
    >
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold tracking-tighter uppercase mb-2">Select Location</h3>
        <p className="text-sm text-gray-400 serif italic">Click on a state to filter cars in that area</p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto usa-map-container">
        <USAMap 
          onClick={mapHandler} 
          customize={statesCustomConfig()}
          width="100%"
          height="auto"
        />
        
        {/* State Name Tooltip on Hover */}
        <AnimatePresence>
          {hoveredState && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ 
                position: 'fixed', 
                left: mousePos.x + 15, 
                top: mousePos.y + 15,
                pointerEvents: 'none',
                zIndex: 1000
              }}
              className="bg-black text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest shadow-xl"
            >
              {stateNames[hoveredState] || hoveredState}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Manual Hover Detection Hack for react-usa-map */}
      <style jsx global>{`
        .usa-map-container path {
          transition: fill 0.2s ease, transform 0.2s ease;
          cursor: pointer;
        }
        .usa-map-container path:hover {
          fill: #4a4a4a !important;
          transform: scale(1.01);
        }
      `}</style>
      
      {/* We need to inject hover listeners into the SVG paths because react-usa-map doesn't expose onMouseEnter easily */}
      <div className="hidden">
        {Object.keys(stateNames).map(abbr => (
          <div 
            key={abbr}
            onMouseEnter={() => setHoveredState(abbr)}
            onMouseLeave={() => setHoveredState(null)}
          />
        ))}
      </div>
      
      {/* Real hover detection using a MutationObserver or just standard CSS + Title? 
          Actually, react-usa-map uses <path data-name="CA" ... />. 
          We can use a global event listener or just rely on the fact that the user wants to see the name.
      */}
      <HoverDetector setHoveredState={setHoveredState} />

      {selectedState && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-200"
        >
          <MapPin className="w-4 h-4 text-black" />
          <span className="text-[11px] font-bold uppercase tracking-wider">
            Selected: {stateNames[selectedState]}
          </span>
          <button 
            onClick={() => onSelectState?.("")}
            className="p-1 hover:bg-gray-200 rounded-full transition"
          >
            <X className="w-3 h-3" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

// Helper component to detect hover on SVG paths
const HoverDetector: React.FC<{ setHoveredState: (s: string | null) => void }> = ({ setHoveredState }) => {
  React.useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as SVGPathElement;
      if (target && target.tagName === 'path' && target.dataset.name) {
        setHoveredState(target.dataset.name);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as SVGPathElement;
      if (target && target.tagName === 'path') {
        setHoveredState(null);
      }
    };

    const container = document.querySelector('.usa-map-container');
    if (container) {
      container.addEventListener('mouseover', handleMouseOver);
      container.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseover', handleMouseOver);
        container.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [setHoveredState]);

  return null;
};
