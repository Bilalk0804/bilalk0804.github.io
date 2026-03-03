import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CONNECTION_DISTANCE = 140;
    const NUM_STARS = 90;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create stars
    const stars: Star[] = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.2 + 0.4,
      opacity: Math.random() * 0.5 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
    }));

    let rafId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update + draw stars
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        s.pulse += s.pulseSpeed;

        // Wrap around edges
        if (s.x < -5) s.x = canvas.width + 5;
        if (s.x > canvas.width + 5) s.x = -5;
        if (s.y < -5) s.y = canvas.height + 5;
        if (s.y > canvas.height + 5) s.y = -5;

        const pulsedOpacity = s.opacity * (0.7 + 0.3 * Math.sin(s.pulse));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${pulsedOpacity})`;
        ctx.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const lineOpacity = (1 - dist / CONNECTION_DISTANCE) * 0.18;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${lineOpacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
