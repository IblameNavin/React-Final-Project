import React, { useEffect, useRef, useState } from 'react';
import './CanvasCursor.css';

const CanvasCursor = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationId = useRef(null);
  const points = useRef([]);
  const hue = useRef(0);

  // Track if dark mode is enabled by checking `document.documentElement` class
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    // Listener to track dark mode class changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

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

    points.current.unshift({ x: mousePos.current.x, y: mousePos.current.y });
    if (points.current.length > 30) points.current.pop();

    hue.current = (hue.current + 1) % 360;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (let i = 0; i < points.current.length - 1; i++) {
      const p1 = points.current[i];
      const p2 = points.current[i + 1];

      const opacity = (1 - i / points.current.length) * 0.8;
      const lineWidth = (1 - i / points.current.length) * 6 + 1;

      const color = `hsla(${hue.current}, 100%, 70%, ${opacity})`;

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
    if (!isDarkMode) {
      // If not dark mode, clear canvas and stop animation
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      if (animationId.current) cancelAnimationFrame(animationId.current);
      animationId.current = null;
      return;
    }

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
      animationId.current = null;
    };
  }, [isDarkMode]);

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
