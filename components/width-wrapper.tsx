"use client"

import { useEffect, useState } from "react";


interface Props {
  children: React.ReactNode;
  maxWidth?: number;
}

export function RenderIfMaxWidth({ children, maxWidth }: Props) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const query = `(max-width: ${maxWidth ? maxWidth : "640"}px)`; // 640px for mobile devices tailwind:sm 
    const mq = window.matchMedia(query);

    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange)

    return () => mq.removeEventListener("change", onChange)
  }, [maxWidth])
  if (!mounted) return null;

  return isMobile ? null : <>{children}</>

}