import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from '../Dashboard';

export function UploadPage() {
  const [rcbookfrontImage, setRcbookfrontImage] = useState(null);
  const [rcbookbackImage, setRcbookbackImage] = useState(null);
  const [licencefrontImage, setLicencefrontImage] = useState(null);
  const [licencebackImage, setLicencebackImage] = useState(null);
  const [insurancefrontImage, setInsurancefrontImage] = useState(null);

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event, setImage) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('Please wait...');
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
      setMessage('Data extraction is completed...');
    } catch (error) {
      console.error(error);
      setMessage('Failed to upload images.');
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex'>
      <Dashboard/>
   
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 mt-2">Upload Document</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex justify-center items-center flex-col container bg-opacity-25 bg-gradient-to-r from-pink-100 via-red-100 to-red-200 p-8 rounded-lg shadow-lg" style={{ maxWidth: '400px', margin: '0 auto' }} >
          <div className="mb-4">
            <label htmlFor="rcbookfrontImage" className="block font-medium tracking-wide">RC Book Front Image</label>
            <div className="mt-1 flex items-center">
              <label className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200 flex items-center">
              <span className="file-name text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] mr-2">{rcbookfrontImage ? rcbookfrontImage.name : 'chooseFile'}</span>
                <input type="file" id="rcbookfrontImage" name="rcbookfrontImage" accept="image/png, image/jpeg" onChange={(e) => handleImageChange(e, setRcbookfrontImage)} className="hidden"/>
              </label>
            </div>
          </div>
          <div className="mb-4 ">
  <label htmlFor="rcbookbackImage" className="block font-medium tracking-wide">RC Book Back Image</label>
  <div className="mt-1 flex items-center">
    <label className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200 flex items-center" >
      <span className="file-name text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] mr-2">{rcbookbackImage ? rcbookbackImage.name : 'Choose File'}</span>
      <input type="file" id="rcbookbackImage" name="rcbookbackImage" accept="image/png, image/jpeg" onChange={(e) => handleImageChange(e, setRcbookbackImage)} className="hidden"/>
    </label>
  </div>
</div>

          <div className="mb-4">
            <label htmlFor="licencefrontImage" className="block font-medium tracking-wide">Licence Front Image</label>
            <div className="mt-1 flex items-center">
              <label className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200 flex items-center">
              <span className="file-name text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] mr-2">{licencefrontImage ? licencefrontImage.name : 'chooseFile'}</span>
                <input type="file" id="licencefrontImage" name="licencefrontImage" accept="image/png, image/jpeg" onChange={(e) => handleImageChange(e, setLicencefrontImage)} className="hidden"/>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="licencebackImage" className="block font-medium tracking-wide">Licence Back Image</label>
            <div className="mt-1 flex items-center">
              <label className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200 flex items-center">
              <span className="file-name text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] mr-2">{licencebackImage ? licencebackImage.name : 'chooseFile'}</span>
                <input type="file" id="licencebackImage" name="licencebackImage" accept="image/png, image/jpeg" onChange={(e) => handleImageChange(e, setLicencebackImage)} className="hidden"/>
              </label>
            </div>
          </div>
          <div className="mb-4 ml-6">
            <label htmlFor="insurancefrontImage" className="block font-medium tracking-wide">Insurance Front Image</label>
            <div className="mt-1 flex items-center">
              <label className="cursor-pointer bg-gray-100 py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-200 flex items-center">
              <span className="file-name text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] mr-2">{insurancefrontImage ? insurancefrontImage.name : 'chooseFle'}</span>
                <input type="file" id="insurancefrontImage" name="insurancefrontImage" accept="image/png, image/jpeg" onChange={(e) => handleImageChange(e, setInsurancefrontImage)} className="hidden"/>
              </label>
            </div>
          </div>
          <button type="submit" className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-2  rounded-full tracking-wide w-1/2" disabled={isLoading}>Upload</button>
          {message && <p className="text-center mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
