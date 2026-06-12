import React from "react";
import logo from "../../../public/7S-logo.png";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

function Toolbar() {
  const navitem = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
  ];

  return (
    <div className="bg-red-500 w-full">
      <div className="flex w-10/12 py-6 mx-auto justify-between items-center">
        <div>
          <img src={logo} alt="7S Logo" className="h-10" />
        </div>

        <div className=" hidden xl:flex gap-6">
          {navitem.map((val, i) => (
            <Link
              key={i}
              to={val.path}
              className="font-semibold hover:text-white transition"
            >
              {val.title}
            </Link>
          ))}
        </div>
        <div>
            <IoMenuSharp className='text-4xl' />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;