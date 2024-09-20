import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleMenu} className="text-white text-lg">
          &#9776;
        </button>
        {isOpen && (
          <div className="absolute top-12 left-0 bg-white shadow-md p-4 rounded-lg z-10">
            <ul>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Departments</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Employees</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Projects</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Resources</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Reports</a></li>
            </ul>
          </div>
        )}
        <h1 className="text-white text-xl ml-4">UrbanGrid</h1>
      </div>
      <div className="flex space-x-4 text-white">
        <a href="#">Departments</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
