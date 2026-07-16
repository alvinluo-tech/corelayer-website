"use client";

import { useEffect } from "react";

export function ScrollSnapActivator() {
  useEffect(() => {
    // Enable snap on mount
    document.documentElement.classList.add("snap-container");
    
    // Disable snap on unmount
    return () => {
      document.documentElement.classList.remove("snap-container");
    };
  }, []);

  return null;
}
