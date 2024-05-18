import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import {FaBars,FaTimes} from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import sun from "../assets/sun.png";
import moon from "../assets/moon.png"

const Navbar = () => {
  const [click,setClick]=useState(false);
  
  // const [theme, setTheme] = useState("dark-theme");
  // const [image, setImage] = useState(sun);
  // const toggleTheme = () => {
  //     if (theme === "dark-theme") {
  //         setImage(moon);
  //         setTheme("light-theme");
  //     }
  //     else {
  //         setImage(sun);
  //         setTheme("dark-theme");
  //     }
  // };
  // useEffect(() => {
  //     document.body.className = theme;
  // }, [theme]);

  const handleClick=()=>setClick(!click);

  const [color,setColor] = useState(false);
   const changeColor =() =>{
    if(window.scrollY >=100){
      setColor(true);
    }
    else{
      setClick(false);
    }
   };
   window.addEventListener("scroll",changeColor);


  return (
    <div className={color ? "header header-bg" :"header"}>
      <Link to="/">
        <h1 >PortFolio</h1>
      </Link>
      {/* <>
      <button onClick={() => ToggleTheme()}>Change Theme</button>
      </> */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li >
            <Link to="/about">About</Link>
          
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/contact" >Contact</Link>
        </li>
      </ul>
      {/* <div> */}
        {/* <button > */}
          {/* <img src={image} alt="" onClick={() => toggleTheme()} className="theme" /> */}
        {/* </button> */}
      {/* </div> */}
      <div className="hamburger" onClick={handleClick}>
        {click ? ( <FaTimes size={20} style={{color:"white"}}/>) :(<FaBars size={20} style={{color:"white"}}/>)}
       
        
      </div>
    </div>
  )
}

export default Navbar


