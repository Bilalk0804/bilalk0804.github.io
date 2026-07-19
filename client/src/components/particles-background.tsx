import { useEffect, useRef } from 'react';

// Catppuccin Mocha palette accents
const CTP = {
  mauve:   [203, 166, 247],
  sky:     [137, 220, 235],
  green:   [166, 227, 161],
  peach:   [250, 179, 135],
  lavender:[180, 190, 254],
  teal:    [148, 226, 213],
};

const COLORS = Object.values(CTP);

// Terminal / rice symbols
const SYMBOLS = [
  '>', '$', '~', '#', '/', '\\', '{', '}', '[', ']', '<', '|',
  '#!/', 'EOF', '::=', '->', '=>', '&&', '||', '**', '%%',
  'pacman', 'yay', 'btop', 'nvim', 'i3', 'hypr', 'zsh',
  '0x', '0b', '1337', '%%',
  '▲', '▶', '◆', '●', '■',
];

interface Glyph {
  x: number;
  y: number;
  vy: number;
  vx: number;
  symbol: string;
  color: number[];
  opacity: number;
  size: number;
  life: number;
  maxLife: number;
}

function randBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn glyphs
    const glyphs: Glyph[] = [];
    const MAX_GLYPHS = 55;

    const spawnGlyph = (): Glyph => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      vy: -randBetween(0.18, 0.55),
      vx: randBetween(-0.08, 0.08),
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: 0,
      size: randBetween(10, 16),
      life: 0,
      maxLife: randBetween(280, 520),
    });

    for (let i = 0; i < MAX_GLYPHS; i++) {
      const g = spawnGlyph();
      g.y = Math.random() * canvas.height; // spread on first load
      g.life = Math.random() * g.maxLife;
      glyphs.push(g);
    }

    // Static dot grid (very faint)
    const GRID_SPACING = 42;

    let rafId: number;
    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Dot grid ---
      for (let gx = 0; gx < canvas.width; gx += GRID_SPACING) {
        for (let gy = 0; gy < canvas.height; gy += GRID_SPACING) {
          ctx.beginPath();
          ctx.arc(gx, gy, 0.7, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,0.055)';
          ctx.fill();
        }
      }

      // --- Glyphs ---
      ctx.save();
      for (const g of glyphs) {
        g.life += 1;
        g.x += g.vx;
        g.y += g.vy;

        // Fade in / out
        const progress = g.life / g.maxLife;
        if (progress < 0.15) {
          g.opacity = progress / 0.15;
        } else if (progress > 0.8) {
          g.opacity = 1 - (progress - 0.8) / 0.2;
        } else {
          g.opacity = 1;
        }

        const alpha = g.opacity * 0.22;
        const [r, g2, b] = g.color;
        ctx.font = `${g.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(${r},${g2},${b},${alpha})`;
        ctx.fillText(g.symbol, g.x, g.y);

        // Respawn
        if (g.life >= g.maxLife) {
          Object.assign(g, spawnGlyph());
        }
      }
      ctx.restore();

      // --- Subtle horizontal scanline sweep ---
      const sweepY = ((frame * 0.4) % (canvas.height + 80)) - 40;
      const sweepGrad = ctx.createLinearGradient(0, sweepY - 30, 0, sweepY + 30);
      sweepGrad.addColorStop(0, 'rgba(137,220,235,0)');
      sweepGrad.addColorStop(0.5, 'rgba(137,220,235,0.025)');
      sweepGrad.addColorStop(1, 'rgba(137,220,235,0)');
      ctx.fillStyle = sweepGrad;
      ctx.fillRect(0, sweepY - 30, canvas.width, 60);

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
