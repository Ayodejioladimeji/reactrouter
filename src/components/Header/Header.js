import React from "react";
import { Link } from "react-router-dom";

const Header = ({ appCount }) => {
  return (
    <>
      <div className="p-4 bg-blue-300 text-white ">
        <ul className="flex justify-between font-bold w-64 m-auto flex ">
          <Link to="/">Home</Link>
          <Link to="/contacts">Contact us</Link>
          <Link to="/about">About us</Link>
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default Header;
