import React, { useEffect, useRef, useState } from 'react';

type RisingSunType = {
    children: React.ReactNode;
}

const RisingSun: React.FC<RisingSunType> = ({ children }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 }); // Default size

    useEffect(() => {
        // Check if running in a browser
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
            };

            window.addEventListener('resize', handleResize);
            handleResize(); // Initialize with the current window size

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!context) return;

        const { width: canvasWidth, height: canvasHeight } = canvasSize;
        const sunRadius = 80;
        let startAngle = 0;

        const getRayEndPoint = (angle: number) => {
            const radians = angle * Math.PI / 180;
            const dx = Math.cos(radians);
            const dy = Math.sin(radians);

            if (canvasWidth * dy <= canvasHeight * dx) {
                return { x: canvasWidth, y: canvasWidth * dy / dx };
            } else {
                return { x: canvasHeight * dx / dy, y: canvasHeight };
            }
        };

        const draw = () => {
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.beginPath();
            context.arc(0, 0, sunRadius, 0, Math.PI / 2);
            context.lineTo(0, 0);
            context.fillStyle = '#CBD4DC';
            context.fill();

            for (let i = 0; i < 30; i++) {
                const angle = (startAngle + 12 * i) % 360;
                const endPoint = getRayEndPoint(angle);
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(endPoint.x, endPoint.y);
                context.strokeStyle = '#CBD4DC'; // Custom hex color
                context.lineWidth = 1;
                context.stroke();
            }

            startAngle += 0.05; // Slower rotation speed
            requestAnimationFrame(draw);
        };

        draw();
    }, [canvasSize]);

    return <div className="rising-sun-container">
        <canvas className="rising-sun-canvas" ref={canvasRef} style={{ backgroundColor: '#080909' }} width={canvasSize.width} height={canvasSize.height} />
        <div className="hero-container">
            {children}
        </div>
    </div>

};

export { RisingSun };
