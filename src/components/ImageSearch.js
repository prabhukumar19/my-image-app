// src/components/ImageSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageSearch = ({ onSelectImage }) => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);

    const searchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
              key: '46697678-057b67636ce4f98d41fa41c9d',
              q: query
            }
          });
          console.log(response);
      setImages(response.data.hits);
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for images..." 
            />
            <button onClick={searchImages}>Search</button>
            <div className="image-grid">
                {images.slice(0,1).map(image => (
                    <img 
                        key={image.id} 
                        src={image.largeImageURL} 
                        alt={image.alt_description} 
                        onClick={() => onSelectImage(image.largeImageURL)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSearch;
