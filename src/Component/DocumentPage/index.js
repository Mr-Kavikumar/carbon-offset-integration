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
            <div className='container'>
        <div className="p-4 flex flex-col items-center ">
            <h2 className="text-3xl font-bold mb-4 ">My Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="space-y-4">
                        {Object.entries(image).map(([key, value]) => (
                            <div key={key} className="border p-2 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => setSelectedImage(value)}>
                                <div className="flex items-center space-x-2">
                                    <img src={value} alt={key} className="w-16 h-16 object-cover rounded-md" />
                                    <p className="text-white">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
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
