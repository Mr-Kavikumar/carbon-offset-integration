import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios for making HTTP requests

const Dashboard = () => {
  const [carbonValue, setCarbonValue] = useState(null);

  useEffect(() => {
    // Assuming you have an API endpoint to fetch carbon value from Arduino
    const fetchCarbonValue = async () => {
      try {
        const response = await axios.get('YOUR_ARDUINO_API_ENDPOINT');
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
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Carbon Dashboard</h1>
      </header>
      <main className="flex-1 p-4">
        <div className="flex items-center justify-center h-full">
          {carbonValue !== null ? (
            <div className="text-5xl font-bold text-green-500">{carbonValue}</div>
          ) : (
            <div className="text-2xl text-gray-600">Loading...</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
