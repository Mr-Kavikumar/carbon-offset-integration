import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../DashboardPage';


const DocumentPage = () => {
    const token = localStorage.getItem('token');
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:3003/documents', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const filteredImages = response.data.images.slice(0, 5).map(image => {
                    const { rcbookfrontImageURL, rcbookbackImageURL, licencefrontImageURL, licencebackImageURL, insurancefrontImageURL } = image;
                    return { rcbookfrontImageURL, rcbookbackImageURL, licencefrontImageURL, licencebackImageURL, insurancefrontImageURL };
                });
                setImages(filteredImages);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [token]);

    const formatImageName = (name) => {
        // Remove "ImageURL" from the string
        let cleanName = name.replace(/ImageURL$/, '');
        // Insert a space before all caps and convert to upper case
        cleanName = cleanName.replace(/([A-Z])/g, ' $1').trim();
        // Capitalize the first letter of each word and handle special cases
        return cleanName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const ImageModal = ({ src, onClose }) => (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" onClick={onClose}>
            <div className="relative p-5 border w-auto max-w-4xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-center">
                    <img src={src} alt="Selected" className="max-h-[90vh] max-w-full" />
                </div>
                <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className='flex'>
            <Dashboard/>
            <div className='flex-grow '>
                <div className="p-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Vehicle Documents</h2>
                    <div className="flex flex-wrap justify-center gap-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {images.map((image, index) => (
                            <div key={index} className="flex flex-wrap justify-center gap-12 ">
                                {Object.entries(image).map(([key, value]) => (
                                    <div key={key} className="w-1/5 min-w-[260px]  rounded overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105">
                                        <img src={value} alt={key} className="w-full h-32 object-cover" />
                                        <div className="px-3 bg-gradient-to-r from-pink-100 via-red-100 to-red-200 py-2">
                                            <div className="font-bold text-md text-center mb-2">{formatImageName(key)}</div>
                                        </div>
                                        <div className="px-3 bg-gradient-to-r from-pink-100 via-red-100 to-red-200 pb-2 text-center">
                                            <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded-full" onClick={() => setSelectedImage(value)}>
                                                View
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}
                </div>
            </div>
        </div>
    );
};

export default DocumentPage;
