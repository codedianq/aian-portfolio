import { useEffect, useRef, useState } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export const SectionReveal = ({
  children,
  threshold = 0.08,
  rootMargin = '0px 0px -60px 0px',
}: SectionRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(36px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        willChange: 'opacity, transform',
      }}>
      {children}
    </div>
  );
};
