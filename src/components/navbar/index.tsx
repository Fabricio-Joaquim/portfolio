import Logo from "@assets/logo.png";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex items-center fixed w-full justify-between flex-wrap bg-gray-800 p-6">
      <img
        src={Logo}
        alt="logo"
        className="h-14 w-14 bg-white rounded-full p-1 cursor-pointer duration-700 hover:shadow-lg"
      />
      <div className="block lg:hidden">
        <button
          id="nav"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              fillRule="evenodd"
              d="M20 2H0V0h20v2zm0 6H0v2h20V8zm0 6H0v2h20v-2z"
            />
          </svg>
        </button>
      </div>
      <div
        id="nav"
        className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div className="text-sm lg:flex-grow gap-2 flex justify-center">
          <a
            href="#skills"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white duration-700"
          >
            Habiliades
          </a>
          <a
            href="#experience"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white duration-700"
          >
            Experiências
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white duration-700"
          >
            Contato
          </a>
          <a
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white duration-700"
          >
            Projetos
          </a>
        </div>
        <div>
          <a
            href="#s"
            className="inline-block text-sm px-4 py-2 leading-none border 
            rounded text-white border-white 
            hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};
