import React from "react";
import Logo from "../public/assets/logo-mobile.svg";
import Image from "next/image";
function Header() {
  return (
    <header className="flex flex-row justify-between items-center bg-bright-clay px-4 py-4">
      <div className="flex flex-row items-center space-x-4">
        <Image src={Logo} />
        <div className="flex flex-row items-center space-x-2">
          <h1 className="text-white font-semibold text-lg">Platform Launch</h1>
          {/* Chevron-Down Icon */}
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#635FC7"
              strokeWidth="2"
              fill="none"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      </div>
      {/* Add Icon */}
      <div className="flex flex-row items-center space-x-2">
        <button className="bg-Iris px-5 py-3 rounded-3xl">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFF"
              d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
            />
          </svg>
        </button>
        {/* Icon Vertical Elipsis */}
        <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#828FA3" fill-rule="evenodd">
            <circle cx="2.308" cy="2.308" r="2.308" />
            <circle cx="2.308" cy="10" r="2.308" />
            <circle cx="2.308" cy="17.692" r="2.308" />
          </g>
        </svg>
      </div>
    </header>
  );
}

export default Header;
