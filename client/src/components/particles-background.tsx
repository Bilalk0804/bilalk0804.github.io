import { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/theme';

// Terminal / rice symbols
const SYMBOLS = [
  '>', '$', '~', '#', '/', '\\', '{', '}', '[', ']', '<', '|',
  '#!/', 'EOF', '::=', '->', '=>', '&&', '||', '**', '%%',
  'pacman', 'yay', 'btop', 'nvim', 'i3', 'hypr', 'zsh',
  '0x', '0b', '1337', '%%',
  '▲', '▶', '◆', '●', '■',
];

// Catppuccin Mocha accents (dark mode)
const DARK_COLORS = [
  [203, 166, 247], // mauve
  [137, 220, 235], // sky
  [166, 227, 161], // green
  [250, 179, 135], // peach
  [180, 190, 254], // lavender
  [148, 226, 213], // teal
];

// Catppuccin Latte accents (light mode)
const LIGHT_COLORS = [
  [136,  57, 239], // mauve
  [  4, 165, 229], // sky
  [ 64, 160,  43], // green
  [254, 100,  11], // peach
  [114, 135, 253], // lavender
  [ 23, 146, 153], // teal
];

interface Glyph {
  x: number;
  y: number;
  vy: number;
  vx: number;
  symbol: string;
  colorIdx: number;
  opacity: number;
  size: number;
  life: number;
  maxLife: number;
}

function rand(a: number, b: number) { return a + Math.random() * (b - a); }

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COLORS = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;
    const dotOpacity = theme === 'dark' ? 0.055 : 0.12;
    const dotColor = theme === 'dark' ? '255,255,255' : '76,79,105';
    const glyphAlphaMax = theme === 'dark' ? 0.22 : 0.18;
    const sweepColor = theme === 'dark' ? '137,220,235' : '4,165,229';
    const GRID_SPACING = 42;
    const MAX_GLYPHS = 55;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawnGlyph = (): Glyph => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      vy: -rand(0.18, 0.55),
      vx: rand(-0.08, 0.08),
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      colorIdx: Math.floor(Math.random() * COLORS.length),
      opacity: 0,
      size: rand(10, 16),
      life: 0,
      maxLife: rand(280, 520),
    });

    const glyphs: Glyph[] = Array.from({ length: MAX_GLYPHS }, () => {
      const g = spawnGlyph();
      g.y = Math.random() * canvas.height;
      g.life = Math.random() * g.maxLife;
      return g;
    });

    let rafId: number;
    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dot grid
      for (let gx = 0; gx < canvas.width; gx += GRID_SPACING) {
        for (let gy = 0; gy < canvas.height; gy += GRID_SPACING) {
          ctx.beginPath();
          ctx.arc(gx, gy, 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor},${dotOpacity})`;
          ctx.fill();
        }
      }

      // Glyphs
      ctx.save();
      for (const g of glyphs) {
        g.life++;
        g.x += g.vx;
        g.y += g.vy;

        const progress = g.life / g.maxLife;
        if (progress < 0.15)       g.opacity = progress / 0.15;
        else if (progress > 0.8)   g.opacity = 1 - (progress - 0.8) / 0.2;
        else                       g.opacity = 1;

        const [r, gr, b] = COLORS[g.colorIdx];
        ctx.font = `${g.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(${r},${gr},${b},${g.opacity * glyphAlphaMax})`;
        ctx.fillText(g.symbol, g.x, g.y);

        if (g.life >= g.maxLife) Object.assign(g, spawnGlyph());
      }
      ctx.restore();

      // Scanline sweep
      const sweepY = ((frame * 0.4) % (canvas.height + 80)) - 40;
      const sg = ctx.createLinearGradient(0, sweepY - 30, 0, sweepY + 30);
      sg.addColorStop(0,   `rgba(${sweepColor},0)`);
      sg.addColorStop(0.5, `rgba(${sweepColor},0.025)`);
      sg.addColorStop(1,   `rgba(${sweepColor},0)`);
      ctx.fillStyle = sg;
      ctx.fillRect(0, sweepY - 30, canvas.width, 60);

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]); // re-run when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
