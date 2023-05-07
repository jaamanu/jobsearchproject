import React from "react";

const NavBar = () => {
  return (
    <div className="navBar flex justify-between  item-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Finder
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-redColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-redColor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-redColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-redColor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-redColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-redColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-redColor">Register</li>
      </div>
    </div>
  );
};

export default NavBar;
