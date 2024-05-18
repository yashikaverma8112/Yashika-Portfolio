import React from 'react'
import './ProjectList.css'
import frontend from '../assets/frontend.png'
import wellnessBox from '../assets/wellnessBox.png'
import unify from '../assets/unify.png'
import emosense from '../assets/emosense.jpg'
import calculator from '../assets/calculator.png'
import sidenav from '../assets/sidenav.png'
import auth from '../assets/auth.png'
import crud from '../assets/crud.png'
import vedioconferencing from '../assets/vedio-conferencing.png'
import Todo from '../assets/Todo.png'
import chitchat from '../assets/chitchat.png';
import { Link } from 'react-router-dom'
const ProjectList = () => {
  return (
    <div className='Projects'>
   
    
    <div className='unify'>
      <h5>React JS || Node JS || MongoDB || Bootstrap || RestFulAPI || Tailwind || Firebase || JWT</h5> 
      <br></br>
    
      <img src={unify}></img>
      <p>Facilitating seamless communication, our platform empowers students to voice their queries while enabling 
teachers and peers to respond remotly. A hesitation-free zone fordoubts, ensuring swift, comprehensive solutions,
and collaborative learning.
 </p>
      <p> <Link to="https://github.com/yashikaverma8112/Unify" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>
    <div className='emosense'>
      <h5>React JS || Node JS || MongoDB || Bootstrap || Flask || RestFulAPI || LSTM || BiLSTM || DeepLearning || JWT</h5> 
      <br></br>
    
      <img src={emosense}></img>
      <p>EmoSense Analytics is the platform which is analysis the sentiments of movie reviews using LSTM and 
BiLSTM, Frontend is created using React, Node is used for Authentication
 </p>
      <p> <Link to="https://github.com/yashikaverma8112/" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>
    <div className='wellnessBox'>
      <h5>React JS || Node JS || MongoDB || Bootstrap || Payment Gateway || RestFulAPI || JWT</h5> 
      <br></br>
    
      <img src={wellnessBox}></img>
      <p>To enhance your physical fitness, prioritize mental well-being .It provides the tools & 
resources to help you achieve your wellness goals. Razor Pay payment gateway is used for seamless payment
 </p>
      <p> <Link to="https://github.com/yashikaverma8112/WellnessBox" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>

    <div className='chitchat'>
      <h5>React JS || Node JS || Socket.IO || Bootstrap  </h5> 
      <br></br>
    
      <img src={chitchat}></img>
      <p>The ChitChat project is the implementation of is a real-time group chat application that allows you to connect and chat with friends seamlessly.
 </p>
      <p> <Link to="https://github.com/yashikaverma8112/ChitChat" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>

    <div className='crud'>
      <h5>React JS || Node JS || MySQL || Bootstrap || RestFulAPI </h5> 
      <br></br>
    
      <img src={crud}></img>
      <p>The project is the implementation of Create, Read, Update, and Delete operations on a user entity. The API interacts with a MySQL database to store and retrieve user data.
 </p>
      <p> <Link to="https://github.com/yashikaverma8112/Crud_Project" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>
    
    <div className='auth'>
      <h5>React JS || Node JS || MySQL || Bootstrap || JWT || RestFulAPI </h5> 
      <br></br>
    
      <img src={auth}></img>
      <p>A secure Sign In and Sign Up functionality where users can log in or registered themselves using their unique username and password.
Implemented a Forgot password feature .
 </p>
      <p> <Link to="https://github.com/yashikaverma8112/Authentication" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>

    <div className='vedio-conferencing'>
      <h5>React JS || ZeGoCloud || Bootstrap  </h5> 
      <br></br>
    
      <img src={vedioconferencing}></img>
      <p>This is the Vedio_conferencing web app provide interaction between group of people through audio,vedio,chat and also have screen recording feature 
 </p>
      <p> <Link to="https://github.com/yashikaverma8112/Vedio_conferencing" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>
    <div className='Todo'>
      <h5>HTML5 || CSS3 || Javascript  </h5> 
      <br></br>
    
      <img src={Todo}></img>
      <p>To-Do web app provides two lists for pending task and completed task, it also provides functionalities like add, edit task, delete, date & time when task uploaded to respective list
 </p>
      <p> <Link to="https://github.com/yashikaverma8112/To-Do-Web-App/tree/main" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>

    <div className='frontend'>
      <h5>HTML5 || CSS3 </h5>
      <br></br>
  
      <img src={frontend}></img>
      <p>This is the webpage only contain frontend of home page of GYM website, and Form to Register into the Gym  </p>
      <p> <Link to="https://github.com/yashikaverma8112/Frontend" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>
    <div className='side-nav'>
      <h5>HTML5 || CSS3 </h5>
      <br></br>

      <img src={sidenav}></img>
      <p>This is the webpage only contain frontend of WEB DEVELOPMENT service Provider website, and have a fully funcational side navbar  </p>
      <p> <Link to="https://github.com/yashikaverma8112/Side_Navbar-" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>
    <div className='calculator'>
      <h5>HTML5 || CSS3 || Javascript </h5> <br></br>
   
      <img src={calculator}></img>
      <p>
It consists simple mathematical calculator to perform simple calculation of maths
And FINcal This FINcal project contain SIP calculator, FD calculator, RD calculator, EMI calculator with chart and graph I use some logical formula to calcuate sip, fd, rd, emi. </p>
      <p> <Link to="https://github.com/yashikaverma8112/Javascript_Calculator" style={{  color: "chartreuse"}}>Github Link</Link></p>
    </div>
  </div>
  )
}

export default ProjectList
