import "./HeroimgStyles.css";
import React from 'react'
import bg1 from '../assets/bg1.jpg';
// import bg from '../assets/bg.png'
import mypic from '../assets/mypic.jpg';
import { Link } from "react-router-dom";
const Heroimg =()=>{
  return (
    <div className="hero">
     <div className="mask">
       <img className="bg1"  src={bg1} alt="bg1"/>
       </div> 
        <div className="content">
      <img className="mypic"  src={mypic} alt="mypic"/>
            <p>Yashika Verma</p>
            <h3>A passionate MERN Full Stack developer</h3>
        <div>
        </div>

        <Link to="/project" className="btn buttn" >Projects</Link>
        <Link to="/contact" className="btn buttn btn-light">Contact</Link>
        </div>
    </div>
    
  );
  };

export default Heroimg;
