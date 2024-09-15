import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-white text-2xl font-bold">GuessTheNumber</h1>

        {/* Logout Button */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-300"
          onClick={() => (window.location.href = "/")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
