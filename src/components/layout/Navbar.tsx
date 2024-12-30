import React from 'react';
import { Plane, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl">TravelWise</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link to="/trips" className="text-gray-700 hover:text-blue-600">My Trips</Link>
            <Link to="/budget" className="text-gray-700 hover:text-blue-600">Budget</Link>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600">
              <User className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="sm:hidden flex items-center">
            <button className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}