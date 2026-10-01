"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

function ReducedMotionProbe() {
  const reducedByLibrary = useReducedMotion();
  const [reducedByMedia, setReducedByMedia] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setReducedByMedia(media.matches);
    };
    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const reduced = reducedByLibrary === true || reducedByMedia;
    document.documentElement.toggleAttribute("data-reduced-motion", reduced);
  }, [reducedByLibrary, reducedByMedia]);

  return null;
}

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <ReducedMotionProbe />
    </MotionConfig>
  );
}
