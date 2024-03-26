import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios for making HTTP requests

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/4 py-6 px-6 h-screen">
      <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
      <ul>
        <li className="mb-2"><a href="/communication" className="text-gray-300 hover:text-white">Communication</a></li>
        <li className="mb-2"><a href="/chart" className="text-gray-300 hover:text-white">Chart</a></li>
        <li className="mb-2"><a href="/Document" className="text-gray-300 hover:text-white">Document</a></li>
      </ul>
    </div>
  );
};

const Dashboard = () => {
    return (
    <Sidebar />
  );
};

export default Dashboard;
