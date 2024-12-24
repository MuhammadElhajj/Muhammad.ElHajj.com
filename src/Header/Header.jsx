import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from '../images/WebSite-Logo.png';
// import { FaBars } from "react-icons/fa";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import HeaderLinks from "./HeaderLinks";

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function activeClass(getindex) {
    setCurrentIndex(getindex);
    console.log(currentIndex)
  }

  return (
    <header className="Header">
      <div className="Header__Logo">
        {/* <img className = "Header__Logo__picture"src={Logo} alt="Logo" /> */}
        <span className="Header__Logo__Tag">&lt;C/&gt;</span>
        {/* <span className="Header__Logo__name">MuhammadElHajj</span> */}
      </div>

      <div className="Header__Other">
        <div className="Header__Links">
          {HeaderLinks && HeaderLinks.length > 0
            ? HeaderLinks.map((item, index) => (
                <Link
                  onClick={() => activeClass(index)}
                  key={index}
                  // className="Header__Links__Link"
                  className={index === currentIndex ? "Header__Links__Link ActiveHeaderLink " :"Header__Links__Link" }
                  to={item.path}
                  // style={{
                  //   color: index === currentIndex ? "#12f7d6 " : "white",
                  // }}
                >
                  {item.name}
                </Link>
              ))
            : null}
          {/* <Link className="Header__Links__Link" to="/" style={{color : "#12f7d6"}}>Home</Link>
 <Link className="Header__Links__Link" to="/blog">Blog</Link> */}
        </div>
        <div className="Header__Search">
          <input
            className="Header__Search__Input"
            type="search"
            placeholder="Search Here"
          />
          <BsSearch className="Header__Search__Icon" />
        </div>
        <div className="Header__Social__Media">
          <Link to="" className="Header__Social__Media__Link">
            <BsInstagram className="Header__Social__Media__Link__Icon" />
            <span className="Header__Social__Media__Link__Name">Instagram</span>
          </Link>
          <Link to="" className="Header__Social__Media__Link">
            <BsDiscord className="Header__Social__Media__Link__Icon" />
            <span className="Header__Social__Media__Link__Name">Discord</span>
          </Link>
          <Link to="" className="Header__Social__Media__Link">
            <BsGithub className="Header__Social__Media__Link__Icon" />
            <span className="Header__Social__Media__Link__Name">Github</span>
          </Link>
        </div>
      </div>
      {/* <FaBars  className="Header__Bars__Icons"/> */}
    </header>
  );
}

export default Header;
