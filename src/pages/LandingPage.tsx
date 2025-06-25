
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">Welcome to the Role-Based Chatbot</h1>
      <p className="text-xl mb-4">Start a conversation with Dr. Kumar</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors">Login</Link>
        <Link to="/signup" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;
