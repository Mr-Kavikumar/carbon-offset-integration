import React, { useState } from 'react';
import axios from 'axios';

export function UploadPage() {
  const [rcbookfrontImage, setRcbookfrontImage] = useState(null);
  const [rcbookbackImage, setRcbookbackImage] = useState(null);
  const [licencefrontImage, setLicencefrontImage] = useState(null);
  const [licencebackImage, setLicencebackImage] = useState(null);
  const [insurancefrontImage, setInsurancefrontImage] = useState(null);

  const handleRcbookfrontImageChange = (event) => {
    setRcbookfrontImage(event.target.files[0]);
  };

  const handleRcbookbackImageChange = (event) => {
    setRcbookbackImage(event.target.files[0]);
  };

  const handleLicencefrontImageChange = (event) => {
    setLicencefrontImage(event.target.files[0]);
  };

  const handleLicencebackImageChange = (event) => {
    setLicencebackImage(event.target.files[0]);
  };

  const handleInsurancefrontImageChange = (event) => {
    setInsurancefrontImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('rcbookfrontImage', rcbookfrontImage);
      formData.append('rcbookbackImage', rcbookbackImage);
      formData.append('licencefrontImage', licencefrontImage);
      formData.append('licencebackImage', licencebackImage);
      formData.append('insurancefrontImage', insurancefrontImage);

      const response = await axios.post('http://localhost:3003/upload', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-red-300'>
    <div className="container h-full mx-auto mt-12 flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold mb-4 text-center">Carbon Offset Integration System</h2>
      <h3 className="text-2xl font-semibold mb-2 text-center">Select Your Images (PNG or JPEG)</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-opacity-25 bg-white bg-blur-md bg-glass p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="rcbookfrontImage" className="block font-medium">RC Book Front Image:</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="rcbookfrontImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="rcbookfrontImage" name="rcbookfrontImage" accept="image/png, image/jpeg" onChange={handleRcbookfrontImageChange} className="hidden"/>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="rcbookbackImage" className="block font-medium">RC Book Back Image:</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="rcbookbackImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="rcbookbackImage" name="rcbookbackImage" accept="image/png, image/jpeg" onChange={handleRcbookbackImageChange} className="hidden"/>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="licencefrontImage" className="block font-medium">Licence Front Image:</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="licencefrontImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="licencefrontImage" name="licencefrontImage" accept="image/png, image/jpeg" onChange={handleLicencefrontImageChange} className="hidden"/>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="licencebackImage" className="block font-medium">Licence Back Image:</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="licencebackImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="licencebackImage" name="licencebackImage" accept="image/png, image/jpeg" onChange={handleLicencebackImageChange} className="hidden"/>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="insurancefrontImage" className="block font-medium">Insurance Front Image:</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="insurancefrontImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="insurancefrontImage" name="insurancefrontImage" accept="image/png, image/jpeg" onChange={handleInsurancefrontImageChange} className="hidden"/>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
      </form>
    </div>
    </div>
  );
}

export default UploadPage;