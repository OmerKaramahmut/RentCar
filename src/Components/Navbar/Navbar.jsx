import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";




const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >=90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const [nav, setNav] = useState(true);
  const handleClickNav = () => {
    setNav(!nav);
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className="navbarPage">
      <div className={navbar ? "nav" : "navTop active"}>
        <div className="NavbarList">
          <div className="Logo">SOYKAN RENTAL</div>
          <div className="List">
            <ul>
              <li>
                <a href=""><IoHomeOutline size={15}/> Home </a>
              </li>
              <li>
                <a href=""><GrServices size={15}/> Services </a>
              </li>
              <li>
                <a href=""><FaInfoCircle size={15}/> About </a>
              </li>
              <li>
                <a href=""><MdContactMail size={15}/> Contact </a>
              </li>
            </ul>
            <div className="MobileMenu" onClick={handleClickNav}>
              {!nav ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
            </div>
            
            <div className={!nav ? "listMobile active" : "listMbl"}>
            <ul className="hiddenMenu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Navbar;
