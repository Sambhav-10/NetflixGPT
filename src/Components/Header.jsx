import React from "react";

const Header = () => {
  return (
    <div className="bg-black bg-opacity-75 absolute w-full h-20 flex  justify-between z-10">
      <img
        className="w-50 ml-10 h-16 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />
      <div className="text-xl mx-4 text-white space-x-16 h-full flex items-center justify-center">
        <button type="p-1 button">Hindi</button>
        <button type="p-1 button">sign</button>
      </div>
    </div>
  );
};

export default Header;
