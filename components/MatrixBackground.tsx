import React, { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
    opacity?: number;
    speed?: number;
    density?: number;
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
    opacity = 0.03,
    speed = 33,
    density = 0.975
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to window size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Matrix characters - mix of katakana, latin, and numbers
        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/\\~!@#$%^&*()_+-=';
        const charArray = chars.split('');

        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);

        // Array to track y position of each column
        const drops: number[] = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start above screen at random heights
        }

        const draw = () => {
            // Semi-transparent black to create fade effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Green text with varying brightness
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const char = charArray[Math.floor(Math.random() * charArray.length)];

                // Calculate position
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Vary the green color slightly for depth
                const brightness = Math.random() * 50 + 100;
                ctx.fillStyle = `rgba(0, ${brightness + 100}, 0, ${0.8 + Math.random() * 0.2})`;

                ctx.fillText(char, x, y);

                // Reset drop to top with random delay when it reaches bottom
                if (y > canvas.height && Math.random() > density) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, speed);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [speed, density]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity }}
            aria-hidden="true"
        />
    );
};

export default MatrixBackground;
