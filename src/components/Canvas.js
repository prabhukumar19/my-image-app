// src/components/Canvas.js
import React, { useRef, useEffect } from 'react';

const Canvas = ({ imageUrl, caption, shape }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        // Set the crossOrigin attribute
        img.crossOrigin = 'Anonymous';
        img.src = imageUrl;

        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            if (caption) {
                ctx.font = '30px Arial';
                ctx.fillStyle = 'white';
                ctx.fillText(caption, 50, 50);
            }
            if (shape) {
                ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
                if (shape === 'rectangle') {
                    ctx.fillRect(20, 20, 100, 50);
                } else if (shape === 'circle') {
                    ctx.beginPath();
                    ctx.arc(100, 100, 30, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        };
    }, [imageUrl, caption, shape]);

    return (
        <canvas ref={canvasRef} width={800} height={600} />
    );
};

export default Canvas;
