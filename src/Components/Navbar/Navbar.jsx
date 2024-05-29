import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  let toggleMenu = useRef(null);
  
  const handleClick = () => {
    if (!menu) {
      toggleMenu.current.classList.toggle("menu-none");
      setmenu(true);
    } else {
      toggleMenu.current.classList.toggle("menu-none");
      setmenu(false);
    }
  };
  
  useEffect(() => {
    toggleMenu.current.classList.add("menu-none");
  }, []);
  
  return (
    <header className="navbar">
      <div className="logo">
        <img className="img-logo" src="images/logo.png" alt="" />
      </div>

      <div ref={toggleMenu} className="nav-links">
        <li className="list">
          <NavLink className="links" to="/">
            Home
          </NavLink>
        </li>
        <li className="list">
          <NavLink className="links" to="/shop">
            Shop
          </NavLink>
        </li>
        <li className="list">
          <NavLink className="links" to="/blog">
            Blog
          </NavLink>
        </li>
        <li className="list">
          <NavLink className="links" to="/about">
            About
          </NavLink>
        </li>
        <li className="list">
          <NavLink className="links" to="/contact">
            Contact
          </NavLink>
        </li>
        <a className="bag-link links" href="#">
          <FaShoppingCart className="cartnav" />
        </a>
      </div>
      <a className="menu-bar" onClick={handleClick}>
        <CiMenuFries className="menu" />
      </a>
    </header>
  );
};

export default Navbar;
