import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const coldFlakes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    const breezeStreaks: Array<{
      x: number;
      y: number;
      len: number;
      speed: number;
      drift: number;
      alpha: number;
    }> = [];

    const colors = ['#22d3ee', '#38bdf8', '#60a5fa', '#a78bfa'];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Cold flakes that fall vertically with slight wind drift.
    for (let i = 0; i < 120; i++) {
      coldFlakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: Math.random() * 1.2 + 0.55,
        size: Math.random() * 2 + 0.6,
        alpha: Math.random() * 0.45 + 0.2
      });
    }

    // Long, soft streaks to simulate cold breeze flow.
    for (let i = 0; i < 28; i++) {
      breezeStreaks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: Math.random() * 34 + 22,
        speed: Math.random() * 1.1 + 1.1,
        drift: Math.random() * 0.8 + 0.2,
        alpha: Math.random() * 0.2 + 0.08
      });
    }

    let animationFrameId: number;
    let windPhase = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      windPhase += 0.008;
      const windForce = Math.sin(windPhase) * 0.45;

      breezeStreaks.forEach((streak) => {
        streak.y += streak.speed;
        streak.x += streak.drift + windForce * 0.6;

        if (streak.y - streak.len > canvas.height || streak.x - streak.len > canvas.width + 80) {
          streak.y = -streak.len;
          streak.x = Math.random() * canvas.width * 0.7 - 40;
        }

        ctx.beginPath();
        ctx.moveTo(streak.x, streak.y);
        ctx.lineTo(streak.x + streak.len * 0.38, streak.y + streak.len);
        ctx.strokeStyle = `rgba(186, 230, 253, ${streak.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      coldFlakes.forEach((flake) => {
        flake.x += flake.vx + windForce;
        flake.y += flake.vy;

        if (flake.y > canvas.height + 8) {
          flake.y = -8;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x < -10) flake.x = canvas.width + 10;
        if (flake.x > canvas.width + 10) flake.x = -10;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${flake.alpha})`;
        ctx.fill();
      });

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - distance / 150) * 0.45})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-18"
    />
  );
}
