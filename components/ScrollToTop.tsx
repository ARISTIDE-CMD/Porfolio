"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setVisible(scrollTop > 100); // n'affiche le bouton qu'après 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 z-50 right-8 w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <svg className="w-10 h-10 -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="10"
          fill="none"
          strokeDasharray={2 * Math.PI * 45}
          strokeDashoffset={((100 - scrollProgress) / 100) * 2 * Math.PI * 45}
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
