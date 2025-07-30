// import { useEffect, useRef } from 'react';

// const useCanvasCursor = () => {
//   const ctxRef = useRef(null);
//   const fRef = useRef(null);
//   const posRef = useRef({ x: 0, y: 0 });
//   const linesRef = useRef([]);
  
//   function n(e) {
//     this.init(e || {});
//   }
  
//   n.prototype = {
//     init: function (e) {
//       this.phase = e.phase || 0;
//       this.offset = e.offset || 0;
//       this.frequency = e.frequency || 0.001;
//       this.amplitude = e.amplitude || 1;
//     },
//     update: function () {
//       this.phase += this.frequency;
//       return this.offset + Math.sin(this.phase) * this.amplitude;
//     },
//     value: function () {
//       return this.offset + Math.sin(this.phase) * this.amplitude;
//     },
//   };

//   function Line(e) {
//     this.init(e || {});
//   }
  
//   Line.prototype = {
//     init: function (e) {
//       const E = {
//         friction: 0.5,
//         size: 50,
//         dampening: 0.25,
//         tension: 0.98,
//       };
//       this.spring = e.spring + 0.1 * Math.random() - 0.02;
//       this.friction = E.friction + 0.01 * Math.random() - 0.002;
//       this.nodes = [];
//       for (var t, n = 0; n < E.size; n++) {
//         t = new Node();
//         t.x = posRef.current.x;
//         t.y = posRef.current.y;
//         this.nodes.push(t);
//       }
//     },
//     update: function () {
//       const E = {
//         dampening: 0.25,
//         tension: 0.98,
//       };
//       var e = this.spring,
//         t = this.nodes[0];
//       t.vx += (posRef.current.x - t.x) * e;
//       t.vy += (posRef.current.y - t.y) * e;
//       for (var n, i = 0, a = this.nodes.length; i < a; i++) {
//         t = this.nodes[i];
//         if (0 < i) {
//           n = this.nodes[i - 1];
//           t.vx += (n.x - t.x) * e;
//           t.vy += (n.y - t.y) * e;
//           t.vx += n.vx * E.dampening;
//           t.vy += n.vy * E.dampening;
//         }
//         t.vx *= this.friction;
//         t.vy *= this.friction;
//         t.x += t.vx;
//         t.y += t.vy;
//         e *= E.tension;
//       }
//     },
//     draw: function (ctx) {
//       var e, t, n = this.nodes[0].x, i = this.nodes[0].y;
//       ctx.beginPath();
//       ctx.moveTo(n, i);
//       for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
//         e = this.nodes[a];
//         t = this.nodes[a + 1];
//         n = 0.5 * (e.x + t.x);
//         i = 0.5 * (e.y + t.y);
//         ctx.quadraticCurveTo(e.x, e.y, n, i);
//       }
//       e = this.nodes[a];
//       t = this.nodes[a + 1];
//       ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
//       ctx.stroke();
//       ctx.closePath();
//     },
//   };

//   function Node() {
//     this.x = 0;
//     this.y = 0;
//     this.vy = 0;
//     this.vx = 0;
//   }

//   const handleMouseMove = (e) => {
//     const canvas = document.getElementById('canvas');
//     if (canvas) {
//       const rect = canvas.getBoundingClientRect();
//       posRef.current.x = e.clientX - rect.left;
//       posRef.current.y = e.clientY - rect.top;
//     }
//   };

//   const handleTouchMove = (e) => {
//     const canvas = document.getElementById('canvas');
//     if (canvas && e.touches.length > 0) {
//       const rect = canvas.getBoundingClientRect();
//       posRef.current.x = e.touches[0].clientX - rect.left;
//       posRef.current.y = e.touches[0].clientY - rect.top;
//     }
//   };

//   const initLines = () => {
//     linesRef.current = [];
//     for (var e = 0; e < 20; e++) {
//       linesRef.current.push(new Line({ spring: 0.4 + (e / 20) * 0.025 }));
//     }
//   };

//   const render = () => {
//     const ctx = ctxRef.current;
//     const f = fRef.current;
    
//     if (ctx && ctx.running) {
//       ctx.globalCompositeOperation = 'source-over';
//       ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//       ctx.globalCompositeOperation = 'lighter';
//       ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',50%,50%,0.25)';
//       ctx.lineWidth = 1;
      
//       for (var e, t = 0; t < linesRef.current.length; t++) {
//         e = linesRef.current[t];
//         e.update();
//         e.draw(ctx);
//       }
      
//       requestAnimationFrame(render);
//     }
//   };

//   const resizeCanvas = () => {
//     const canvas = document.getElementById('canvas');
//     if (canvas && ctxRef.current) {
//       const container = canvas.parentElement;
//       if (container) {
//         canvas.width = container.offsetWidth;
//         canvas.height = container.offsetHeight;
//         ctxRef.current.canvas.width = container.offsetWidth;
//         ctxRef.current.canvas.height = container.offsetHeight;
//       }
//     }
//   };

//   useEffect(() => {
//     const canvas = document.getElementById('canvas');
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     ctxRef.current = ctx;
//     ctx.running = true;

//     fRef.current = new n({
//       phase: Math.random() * 2 * Math.PI,
//       amplitude: 85,
//       frequency: 0.0015,
//       offset: 285,
//     });

//     // Initialize
//     resizeCanvas();
//     initLines();

//     // Event listeners
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('touchmove', handleTouchMove);
//     window.addEventListener('resize', resizeCanvas);

//     // Start animation
//     render();

//     return () => {
//       if (ctxRef.current) {
//         ctxRef.current.running = false;
//       }
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('touchmove', handleTouchMove);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);
// };

// export default useCanvasCursor;