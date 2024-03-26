import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios for making HTTP requests

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-1/4 py-4 px-6">
        <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Link 1</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Link 2</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Link 3</a></li>
          <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Link 4</a></li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [carbonValue, setCarbonValue] = useState(null);

  useEffect(() => {
    // Assuming you have an API endpoint to fetch carbon value from Arduino
    const fetchCarbonValue = async () => {
      try {
        const response = await axios.get('https://api.thingspeak.com/channels/2409021/feeds.json');
        setCarbonValue(response.data.carbonValue);
      } catch (error) {
        console.error('Error fetching carbon value:', error);
      }
    };

    // Fetch carbon value on component mount
    fetchCarbonValue();

    // Fetch carbon value every 5 seconds (adjust timing as needed)
    const intervalId = setInterval(fetchCarbonValue, 5000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Sidebar>
      <div className="flex items-center justify-center h-full">
        {carbonValue !== null ? (
          <div className="text-5xl font-bold text-blue-500">{carbonValue}</div>
        ) : (
          <div className="text-2xl text-gray-600">Loading...</div>
        )}
      </div>
    </Sidebar>
  );
};

export default Dashboard;
