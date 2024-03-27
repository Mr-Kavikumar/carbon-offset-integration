import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from '../Dashboard';

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
    <div className='flex'>
      <Dashboard/>
   
    <div className="container  mt-4 ">
      <h2 className="text-3xl font-bold mb-8 mt-2">Upload Document</h2>
      {/* <h3 className="text-2xl font-semibold mb-2 text-center">Select Your Images (PNG or JPEG)</h3> */}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex justify-center items-center flex-col container bg-opacity-25 bg-gradient-to-r from-pink-100 via-red-100 to-red-200 p-8 rounded-lg shadow-lg" style={{ maxWidth: '400px', margin: '0 auto' }} >
        <div className="mb-4">
          <label htmlFor="rcbookfrontImage" className="block font-medium tracking-wide">RC Book Front Image</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="rcbookfrontImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="rcbookfrontImage" name="rcbookfrontImage" accept="image/png, image/jpeg" onChange={handleRcbookfrontImageChange} className="hidden"/>
          </div>
        </div>
        <div className="mb-4 ">
          <label htmlFor="rcbookbackImage" className="block font-medium tracking-wide">RC Book Back Image</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="rcbookbackImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="rcbookbackImage" name="rcbookbackImage" accept="image/png, image/jpeg" onChange={handleRcbookbackImageChange} className="hidden"/>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="licencefrontImage" className="block font-medium tracking-wide">Licence Front Image</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="licencefrontImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="licencefrontImage" name="licencefrontImage" accept="image/png, image/jpeg" onChange={handleLicencefrontImageChange} className="hidden"/>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="licencebackImage" className="block font-medium tracking-wide">Licence Back Image</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="licencebackImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="licencebackImage" name="licencebackImage" accept="image/png, image/jpeg" onChange={handleLicencebackImageChange} className="hidden"/>
          </div>
        </div>
        <div className="mb-4 ml-6">
          <label htmlFor="insurancefrontImage" className="block font-medium tracking-wide">Insurance Front Image</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="insurancefrontImage" className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200">Choose File</label>
            <input type="file" id="insurancefrontImage" name="insurancefrontImage" accept="image/png, image/jpeg" onChange={handleInsurancefrontImageChange} className="hidden"/>
          </div>
        </div>
        <button type="submit" className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-2 mt-2 rounded-full tracking-wide w-1/2">Upload</button>
      </form>
    </div>
    </div>
  
  );
}

export default UploadPage;
