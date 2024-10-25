// src/App.js
import React, { useState } from 'react';
import ImageSearch from './components/ImageSearch';
import ImageEditor from './components/ImageEditor';

const App = () => {
    const [selectedImage, setSelectedImage] = useState('');

    return (
        <div>
            <h1>Image Editor</h1>
            <ImageSearch onSelectImage={setSelectedImage} />
            {selectedImage && <ImageEditor selectedImage={selectedImage} />}
        </div>
    );
};

export default App;
