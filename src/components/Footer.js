import "./FooterStyles.css";
import {FaHome,FaPhone,FaMailBulk,   FaLinkedin, FaGithub} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">

                <div>
                <p> <FaHome size={15} style={{color: "white",marginRight:"2rem"}} />
                   Jaipur, Rajasthan</p>
                    
                </div>
            </div>
            {/* <div className="phone">
            <h4><FaPhone size={15} style={{color: "white",marginRight:"2rem"}} />
         +91-9351658304</h4>
           <br></br>
            </div> */}
            <div className="email">
            <h4><FaMailBulk size={15} style={{color: "white",marginRight:"2rem"}} />
            yashikaverma@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            <h4>Qualification</h4>
            <br></br>
            <p>Computer Science Undergrade With Specialization Full Stack & Web Development Associated With Xebia</p>
        <div className="social">
       
        <a href="https://www.linkedin.com/in/yashika-verma-32a189229/"><FaLinkedin size={25} style={{color: "white",marginRight:"1rem"}} /></a>
        <a href="https://github.com/yashikaverma8112?tab=repositories"><FaGithub size={25} style={{color: "white",marginRight:"1rem"}} /></a>
     
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
