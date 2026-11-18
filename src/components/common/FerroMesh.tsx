import React, { useRef, useEffect } from 'react';

interface FerroMeshProps {
  reveal?: boolean;
}

export const FerroMesh: React.FC<FerroMeshProps> = ({ reveal = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const host = canvas.parentElement;
    if (!host) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const GAP = 38;
    const RADIUS = 190;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, power: 0, active: false };
    const ripples: Array<{ x: number; y: number; start: number }> = [];
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let points = new Float32Array(0);
    let glow = new Float32Array(0);
    let visible = true;
    let running = false;
    let idleCleared = false;
    let animId = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = host.clientWidth;
      height = host.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / GAP) + 3;
      rows = Math.ceil(height / GAP) + 3;
      points = new Float32Array(cols * rows * 2);
      glow = new Float32Array(cols * rows);
    };

    const frame = (t: number) => {
      if (!visible) {
        running = false;
        return;
      }

      mouse.x = lerp(mouse.x, mouse.tx, 0.12);
      mouse.y = lerp(mouse.y, mouse.ty, 0.12);
      mouse.power = lerp(mouse.power, mouse.active ? 1 : 0, 0.06);

      for (let i = ripples.length - 1; i >= 0; i--) {
        if (t - ripples[i].start > 1800) ripples.splice(i, 1);
      }

      if (reveal && mouse.power < 0.01 && !ripples.length) {
        if (!idleCleared) {
          ctx.clearRect(0, 0, width, height);
          idleCleared = true;
        }
        animId = requestAnimationFrame(frame);
        return;
      }
      idleCleared = false;

      const offsetX = (width % GAP) / 2 - GAP;
      const offsetY = (height % GAP) / 2 - GAP;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let x = offsetX + c * GAP + Math.cos(t * 0.0006 + r * 0.45) * 2;
          let y = offsetY + r * GAP + Math.sin(t * 0.0008 + c * 0.4 + r * 0.15) * 2.5;
          let g = 0;

          if (mouse.power > 0.01) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const d = Math.hypot(dx, dy);
            if (d < RADIUS && d > 0.001) {
              const f = 1 - d / RADIUS;
              const push = f * f * 30 * mouse.power;
              x += (dx / d) * push;
              y += (dy / d) * push;
              g = f * mouse.power;
            }
          }

          for (const ripple of ripples) {
            const age = t - ripple.start;
            const rx = x - ripple.x;
            const ry = y - ripple.y;
            const rd = Math.hypot(rx, ry);
            const band = 1 - Math.abs(rd - age * 0.45) / 50;
            if (band > 0 && rd > 0.001) {
              const life = 1 - age / 1800;
              x += (rx / rd) * band * 16 * life;
              y += (ry / rd) * band * 16 * life;
              g = Math.max(g, band * life);
            }
          }

          const k = r * cols + c;
          points[k * 2] = x;
          points[k * 2 + 1] = y;
          glow[k] = g;
        }
      }

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      if (!reveal) {
        ctx.strokeStyle = 'rgba(35, 101, 55, 0.075)';
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const k = (r * cols + c) * 2;
            if (c === 0) ctx.moveTo(points[k], points[k + 1]);
            else ctx.lineTo(points[k], points[k + 1]);
          }
        }
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const k = (r * cols + c) * 2;
            if (r === 0) ctx.moveTo(points[k], points[k + 1]);
            else ctx.lineTo(points[k], points[k + 1]);
          }
        }
        ctx.stroke();
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const k = r * cols + c;
          const g = glow[k];
          if (g < 0.04) continue;
          const x = points[k * 2];
          const y = points[k * 2 + 1];

          ctx.strokeStyle = reveal
            ? `rgba(255, 255, 255, ${(g * 0.6).toFixed(3)})`
            : `rgba(35, 101, 55, ${(g * 0.5).toFixed(3)})`;
          ctx.beginPath();
          if (c + 1 < cols) {
            ctx.moveTo(x, y);
            ctx.lineTo(points[(k + 1) * 2], points[(k + 1) * 2 + 1]);
          }
          if (r + 1 < rows) {
            ctx.moveTo(x, y);
            ctx.lineTo(points[(k + cols) * 2], points[(k + cols) * 2 + 1]);
          }
          ctx.stroke();

          ctx.fillStyle = `rgba(255, 103, 0, ${(g * 0.9).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.2 + g * 2.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!running && visible) {
        running = true;
        animId = requestAnimationFrame(frame);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const r = host.getBoundingClientRect();
      mouse.tx = e.clientX - r.left;
      mouse.ty = e.clientY - r.top;
      if (!mouse.active && mouse.power < 0.05) {
        mouse.x = mouse.tx;
        mouse.y = mouse.ty;
      }
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    const onPointerDown = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, start: performance.now() });
      if (ripples.length > 4) ripples.shift();
    };

    host.addEventListener('pointermove', onPointerMove);
    host.addEventListener('pointerleave', onPointerLeave);
    host.addEventListener('pointerdown', onPointerDown);

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    io.observe(host);

    start();

    return () => {
      cancelAnimationFrame(animId);
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerleave', onPointerLeave);
      host.removeEventListener('pointerdown', onPointerDown);
      ro.disconnect();
      io.disconnect();
    };
  }, [reveal]);

  return <canvas ref={canvasRef} className="mesh-canvas" aria-hidden="true" />;
};
