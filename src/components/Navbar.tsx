
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-semibold">Chatbot</div>
      <div className="space-x-4">
        <Link to="/" className="hover:bg-indigo-500 p-2 rounded">Home</Link>
        <Link to="/login" className="hover:bg-indigo-500 p-2 rounded">Login</Link>
        <Link to="/signup" className="hover:bg-indigo-500 p-2 rounded">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
