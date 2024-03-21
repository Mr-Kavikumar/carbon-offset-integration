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
      const formData = new FormData();
      formData.append('rcbookfrontImage', rcbookfrontImage);
      formData.append('rcbookbackImage', rcbookbackImage);
      formData.append('licencefrontImage', licencefrontImage);
      formData.append('licencebackImage', licencebackImage);
      formData.append('insurancefrontImage', insurancefrontImage);

      const response = await axios.post('http://localhost:3003/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto mt-36">
      <h2 className="md:text-3xl text-xl">Carbon offset Integration system</h2>
      <h3 className="md:text-2xl text-lg">Select Your Images (PNG or JPEG)</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="rcbookfrontImage">RC Book Front Image:</label>
          <input type="file" id="rcbookfrontImage" name="rcbookfrontImage" accept="image/png, image/jpeg" onChange={handleRcbookfrontImageChange} />
        </div>
        <div>
          <label htmlFor="rcbookbackImage">RC Book Back Image:</label>
          <input type="file" id="rcbookbackImage" name="rcbookbackImage" accept="image/png, image/jpeg" onChange={handleRcbookbackImageChange} />
        </div>
        <div>
          <label htmlFor="licencefrontImage">Licence Front Image:</label>
          <input type="file" id="licencefrontImage" name="licencefrontImage" accept="image/png, image/jpeg" onChange={handleLicencefrontImageChange} />
        </div>
        <div>
          <label htmlFor="licencebackImage">Licence Back Image:</label>
          <input type="file" id="licencebackImage" name="licencebackImage" accept="image/png, image/jpeg" onChange={handleLicencebackImageChange} />
        </div>
        <div>
          <label htmlFor="insurancefrontImage">Insurance Front Image:</label>
          <input type="file" id="insurancefrontImage" name="insurancefrontImage" accept="image/png, image/jpeg" onChange={handleInsurancefrontImageChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
export default UploadPage;