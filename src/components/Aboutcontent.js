import { Link } from 'react-router-dom';
import './Aboutcontent.css';
import React from 'react';
import resume from '../assets/resume.pdf';
import about_gif from '../assets/about_gif.png';

const Aboutcontent = () => {
  return (
    <div className='about'>

    <div className='left'>
        <img src={about_gif} ></img>
 
        <a href={resume}>  <button className='btn btn-resume'  style={{marginTop: "0px"}}>See My Resume</button></a>

      </div>

      <div className='right'>
        <div className='about-content'>
          <h3>Hi 👋, I'm Yashika Verma</h3><br></br>

          <p>I am a passionate and creative MERN stack developer and have foundation in data structures and algorithms. Pursuing B.Tech in CSE from JECRC University, Jaipur with Specialization Full Stack & Web Design associated with Xebia. , I am focused on building robust and scalable applications. I enjoy creating efficient web experiences. I excel in problem-solving. Adaptable and eager to learn, I strive to stay up-to-date with the latest technologies. My goal is to contribute to innovative and user-friendly web applications, making a positive impact through my work. I believe in learning and exploring new things. Along with that I am a Quick learner, Hardworking and a Self-motivated person who always curious to solve problems and fix errors</p>
<br></br>
          <p><Link to ="/contact"  style={{color:" rgb(128, 217, 76)" ,cursor:"pointer"}}>Let's collaborate and bring your ideas to reality!</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Aboutcontent;
