// src/components/ImageEditor.js
import React, { useState } from 'react';
import Canvas from './Canvas';

const ImageEditor = ({ selectedImage }) => {
    const [caption, setCaption] = useState('');
    const [shape, setShape] = useState('');
    console.log({selectedImage});

    const handleDownload = () => {
        const canvas = document.querySelector('canvas');
        const link = document.createElement('a');
        link.download = 'edited-image.png';
        link.href = canvas.toDataURL();
        link.click();
    };

    return (
        <div>
            <Canvas imageUrl={selectedImage} caption={caption} shape={shape} />
            <input 
                type="text" 
                value={caption} 
                onChange={(e) => setCaption(e.target.value)} 
                placeholder="Add a caption..." 
            />
            <select onChange={(e) => setShape(e.target.value)} defaultValue="">
                <option value="" disabled>Select Shape</option>
                <option value="rectangle">Rectangle</option>
                <option value="circle">Circle</option>
            </select>
            <button onClick={handleDownload}>Download Image</button>
        </div>
    );
};

export default ImageEditor;
