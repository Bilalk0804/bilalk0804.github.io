import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle animate-particle';
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const tx = (Math.random() - 0.5) * 100;
      const duration = Math.random() * 4 + 6;
      
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.setProperty('--tx', tx + 'px');
      particle.style.animationDuration = duration + 's';
      
      container.appendChild(particle);
      
      setTimeout(() => particle.remove(), duration * 1000);
    };

    // Create particles continuously
    const interval = setInterval(() => {
      createParticle();
    }, 300);

    // Initial particles
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createParticle(), i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
