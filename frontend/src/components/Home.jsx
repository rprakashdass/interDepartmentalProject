// 4import { useState } from 'react';
// import PropTypes from 'prop-types';
// import '../CSS/index.css';

// function Home() {
//   const [overlayVisible, setOverlayVisible] = useState(false);

//   const showOverlay = () => setOverlayVisible(true);
//   const hideOverlay = () => setOverlayVisible(false);

//   return (
//     <div className="container mx-auto">
//       <header className="flex justify-between items-center py-4 border-b">
//         <div className="flex items-center">
//           <img src="/src/assets/emblem.png" alt="Government Logo" className="mr-4" width="50" height="50" />
//           <div>
//             <h1 className="text-2xl font-bold">UrbanGrid</h1>
//             <p className="text-sm">A government website for connecting government departments</p>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <input type="text" placeholder="Search.." className="search-bar" />
//           <button className="search-button" style={{ width: '38px', height: '38px' }}>
//             <i className="fas fa-search"></i>
//           </button>
//           <button className="login-button" onClick={showOverlay}>Login</button>
//         </div>
//       </header>

//       {overlayVisible && (
//         <div className="overlay" id="loginOverlay">
//           <div className="container">
//             <div className="close-btn" onClick={hideOverlay}>X</div>
//             <div className="login-option">
//               <a href="deptlogin.html"><p>Department Login</p></a>
//               <img src="/src/assets/icons8-department-50.png" alt="Department login" />
//             </div>
//             <div className="login-option">
//               <p>Employee Login</p>
//               <img src="/src/assets/icons8-employee-50.png" alt="Employee login" />
//             </div>
//             <div className="login-option">
//               <p>Agency Login</p>
//               <img src="/src/assets/icons8-agency-50.png" alt="Agency login" />
//             </div>
//             <div className="new-user">
//               New user? <a href="#">Sign in</a>
//             </div>
//           </div>
//         </div>
//       )}

//       <nav className="navbar flex justify-center mt-4 relative">
//         <a href="#"><i className="fas fa-home"></i></a>
//         <Dropdown title="Departments" >
//           <a href="/src/pages/civil.html">Civil</a>
//           <a href="/src/pages/road.html">Road & Highways</a>
//           <a href="/src/pages/water.html">Water</a>
//           <a href="/src/pages/gas.html">Gas</a>
//           <a href="/src/pages/tele.html">Telecommunication</a>
//           <a href="/src/pages/transport.html">Transport</a>
//         </Dropdown>
//         <Dropdown title="About Us">
//           <a href="#">Our Mission</a>
//           <a href="#">Our Team</a>
//           <a href="#">History</a>
//         </Dropdown>
//         <Dropdown title="Contact">
//           <a href="#">Contact Form</a>
//           <a href="#">Office Locations</a>
//           <a href="#">Support</a>
//         </Dropdown>
//       </nav>

//       <main>
//         <section className="flex mt-4">
//           <img src="/src/assets/modi.jpg" alt="Government officials" className="mr-4" width="300" height="200" />
//           <div>
//             <p>Government departments often hold press conferences...</p>
//           </div>
//         </section>
        
//         <section className="mt-4">
//           <h2 className="font-bold">Latest News:</h2>
//         </section>

//         <section className="mt-4">
//           <h2 className="font-bold">Quick Links</h2>
//           <ul className="list-disc ml-5">
//             <li><a href="#" className="text-blue-500 hover:underline">Link 1</a></li>
//             <li><a href="#" className="text-blue-500 hover:underline">Link 2</a></li>
//             <li><a href="#" className="text-blue-500 hover:underline">Link 3</a></li>
//             <li><a href="#" className="text-blue-500 hover:underline">Link 4</a></li>
//           </ul>
//         </section>

//         <section className="mt-4">
//           <h2 className="font-bold">About Us</h2>
//           <p>UrbanGrid is dedicated to fostering collaboration...</p>
//         </section>

//         <section className="mt-4">
//           <h2 className="font-bold">Contact Us</h2>
//           <p>If you have any questions, feel free to reach out...</p>
//         </section>
//       </main>

//       <footer className="mt-8 py-4 bg-gray-200 text-center">
//         <p>&copy; 2023 UrbanGrid. All rights reserved.</p>
//         <p>
//           <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> |
//           <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> |
//           <a href="#" className="text-blue-500 hover:underline">Contact Us</a>
//         </p>
//       </footer>
//     </div>
//   );
// }

// function Dropdown({ title, children }) {
//   return (
//     <div className="dropdown relative">
//       <a href="#">{title} <i className="fas fa-caret-down"></i></a>
//       <div className="dropdown-menu absolute">
//         {children}
//       </div>
//     </div>
//   );
// }

// // PropTypes validation
// Dropdown.propTypes = {
//     title: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
//   };

// export default Home;



import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="text-center mt-4">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Emblem_of_India.svg" 
          alt="Indian Emblem" 
          className="mx-auto h-24 w-24"
        />
        <h2 className="text-xl font-bold">An government website for connecting government departments</h2>
      </div>

      {/* Main Section with images and description */}
      <div className="flex flex-wrap mt-8 p-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/150" 
            alt="Leader 1" 
            className="w-48 h-48 object-cover"
          />
          <img
            src="https://via.placeholder.com/150" 
            alt="Leader 2" 
            className="w-48 h-48 object-cover ml-4"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <p className="text-gray-700">
            Government departments often hold press conferences to announce new projects, policy changes, or collaborations aimed at improving public services. Discussions might include updates on infrastructure projects, social welfare initiatives, or implementation of new technologies.
          </p>
        </div>
      </div>

      {/* Latest News and Upcoming Projects Section */}
      <div className="flex flex-wrap mt-8">
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-lg font-bold">Latest News:</h3>
          <p className="text-gray-600">- News Item 1</p>
          <p className="text-gray-600">- News Item 2</p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-lg font-bold">Upcoming Projects:</h3>
          <p className="text-gray-600">- Project 1</p>
          <p className="text-gray-600">- Project 2</p>
        </div>
      </div>

      {/* Bottom Buttons Section */}
      <div className="flex justify-around mt-8">
        <button className="bg-blue-600 text-white p-2 rounded">Department Login</button>
        <button className="bg-blue-600 text-white p-2 rounded">Employee Login</button>
        <button className="bg-blue-600 text-white p-2 rounded">Agent Login</button>
      </div>

      {/* Chatbot Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-600 text-white p-4 rounded-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Assistant_logo.png/600px-Google_Assistant_logo.png" 
            alt="Chatbot Icon" 
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
