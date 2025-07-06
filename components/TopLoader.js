'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function TopLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setProgress(0);

    // Simulate incremental progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev; // stop at 90%, wait for route to settle
        return prev + Math.random() * 10;
      });
    }, 200);

    // After route changes, complete to 100% and hide
    const complete = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // wait for bar to reach 100%
    }, 1200); // simulate a total loading time

    return () => {
      clearInterval(interval);
      clearTimeout(complete);
    };
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50">
      <div
        className="h-full bg-blue-500 transition-all duration-200 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
