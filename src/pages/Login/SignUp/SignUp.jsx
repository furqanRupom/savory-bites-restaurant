import React from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

const SignUp = () => {
  return (
    <form className="w-full max-w-sm mx-auto p-5  bg-orange-500 bg-opacity-10 backdrop-blur-sm">
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="name">
          Name
        </label>
        <div className="relative">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <MdPerson className="text-orange-500" size={20} />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="email">
          Email
        </label>
        <div className="relative">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <MdEmail className="text-orange-500" size={20} />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-white font-bold mb-2" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <MdLock className="text-orange-500" size={20} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
