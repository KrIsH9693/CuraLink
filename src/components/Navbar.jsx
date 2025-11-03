import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        CuraLink
      </Link>

      <div className="flex gap-4">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">
          Home
        </Link>
        <Link to="/patient/dashboard" className="text-gray-700 hover:text-indigo-600">
          Patient Dashboard
        </Link>
        <Link to="/researcher/dashboard" className="text-gray-700 hover:text-indigo-600">
          Researcher Dashboard
        </Link>
      </div>
    </nav>
  );
}
