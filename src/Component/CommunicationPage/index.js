import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/4 py-4 px-6 h-screen">
      <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
      <ul>
        <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Link to Page 1</a></li>
        <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Link to Page 2</a></li>
        <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Link to Page 3</a></li>
        <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Link to Page 4</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
