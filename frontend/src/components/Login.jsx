import React, { useContext, useState, useEffect } from "react";
import authContext from "../Context/authcontext.jsx";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  
  const context = useContext(authContext);
  const { login, successLog, tap } = context;
  const Navigate = useNavigate();

  const [cred, setCred] = useState({ email: "", password: "" });
  const [val, setVal] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(cred.email, cred.password);
  };

  useEffect(() => {
    if (successLog) {
      Navigate("/home");
    }
  }, [successLog]);

  const handleChange = (e) => {
    e.preventDefault();
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Display error message if there is an error */}
        {!successLog && tap && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {"Log In with Correct Credentials."}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={cred.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={cred.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:text-indigo-700">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
