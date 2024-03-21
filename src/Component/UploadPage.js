import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., upload file)
  };

  return (
    <div className="container mx-auto mt-36">
      <div className="my-8 flex items-center justify-center pb-5">
        <h2 className="md:text-3xl text-xl">Carbon offset Intergration system</h2>
      </div>
      <h3 className="md:text-2xl text-lg flex items-center justify-center">
      Select Your Image (PNG or JPEG)
      </h3>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="my-4"
      >
        <div className="flex justify-center items-center flex-col">
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-gray-500 text-white px-4 py-2 rounded-md text-md font-bold hover:bg-red-600"
          >
            Browse
          </label>
          <input
            id="file-upload"
            type="file"
            name="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleFileChange}
          />
          <span className="text-gray-500 pt-4 pb-5">
            {selectedFile ? selectedFile.name : "No file selected"}
          </span>
          {selectedFile && (
            <img
              className="rounded-xl"
              alt="Selected Image"
              width="400"
              height="400"
              src={URL.createObjectURL(selectedFile)}
            ></img>
          )}
          <br /><br /><br />
          <div className="pt-5">
            <Link to= '/DashBoard'>
            <input
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md text-md font-bold cursor-pointer hover:bg-red-600"
              value="Upload"
            />
            </Link>
          </div>
        </div>
      </form>
      {/* Conditional rendering based on results_available state */}
      {/* Implement your logic here */}
    </div>
  );
}

export default UploadPage;
