// src/components/CanvasCursor.jsx
import React, { useEffect, useRef } from 'react';
import './CanvasCursor.css';

const CanvasCursor = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationId = useRef(null);
  const points = useRef([]);
  const hue = useRef(0); // 🌈 Dynamic hue

  // Initialize points
  useEffect(() => {
    const numPoints = 30;
    points.current = Array(numPoints).fill().map(() => ({ x: 0, y: 0 }));
  }, []);

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update tail
    points.current.unshift({ x: mousePos.current.x, y: mousePos.current.y });
    if (points.current.length > 30) points.current.pop();

    // 💡 Increment hue for color animation
    hue.current = (hue.current + 1) % 360;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (let i = 0; i < points.current.length - 1; i++) {
      const p1 = points.current[i];
      const p2 = points.current[i + 1];

      const opacity = (1 - i / points.current.length) * 0.8;
      const lineWidth = (1 - i / points.current.length) * 6 + 1;

      const color = `hsla(${hue.current}, 100%, 70%, ${opacity})`; // 🔥 rainbow color

      ctx.strokeStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.lineWidth = lineWidth;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    animationId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('mousemove', handleMouseMove);
    animationId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId.current) cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        width: '100vw',
        height: '100vh',
        background: 'transparent',
      }}
    />
  );
};

export default CanvasCursor;
