"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function MagneticButton({ href, className = "", children }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Snapping strength (0.35 factor for subtle translation)
    const x = (clientX - centerX) * 0.35;
    const y = (clientY - centerY) * 0.35;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Determine if it is an external link
  const isExternal = href.startsWith("http") || href.startsWith("//");

  const buttonStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" : "none"
  };

  if (isExternal) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          className={`inline-flex items-center justify-center ${className}`}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Link
        href={href}
        style={buttonStyle}
        className={`inline-flex items-center justify-center ${className}`}
      >
        {children}
      </Link>
    </div>
  );
}
