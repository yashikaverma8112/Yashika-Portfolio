import { Link } from 'react-router-dom';
import './Aboutcard.css';
import React from 'react';

const Aboutcard = () => {
  return (
    <div className='projectcard'>
      <h1>-MY SKILLS- </h1>
      <div className='card-container'>
        <div className='card'>
            <h3>-Programming Languages-</h3>
            {/* <span className='bar'></span> */}
            <p className='btc'></p>
        
             <p>C
                   </p>
                  <span className='bar' data-percent = "40%"><span className='cplus' style={{width:"40%"}}>  </span></span>
                <p>C++
                   </p>
                  <span className='bar' data-percent = "40%"><span className='cplus' style={{width:"40%"}}>  </span></span>
                <p>JAVA</p> 
                  <span className='bar' data-percent = "75%"><span className='cplus' style={{width:"65%"}}>  </span></span>
                <p>PYTHON</p> 
                  <span className='bar' data-percent = "75%"><span className='cplus' style={{width:"65%"}}>  </span></span>
                <p>JAVASCRIPT</p> 
                  <span className='bar' data-percent = "30%"><span className='cplus' style={{width:"30%"}}>  </span></span>
       
        </div>
        <div className='card'>
            <h3>-TECHNOLOGIES-</h3>
            {/* <span className='bar'></span> */}
            <p className='btc'></p>
            <p>HTML5</p>
                  <span className='bar' data-percent = "15%"><span className='cplus' style={{width:"15%"}}>  </span></span>
            <p>CSS3</p>
                  <span className='bar' data-percent = "20%"><span className='cplus' style={{width:"20%"}}>  </span></span>
            <p>BOOTSTRAP</p>
                  <span className='bar' data-percent = "40%"><span className='cplus' style={{width:"40%"}}>  </span></span>
            <p>REACTJS</p>
                  <span className='bar' data-percent = "50%"><span className='cplus' style={{width:"50%"}}>  </span></span>
            <p>NODE.JS</p>
                  <span className='bar' data-percent = "35%"><span className='cplus' style={{width:"35%"}}>  </span></span>
            <p>MY SQL</p>
                  <span className='bar' data-percent = "35%"><span className='cplus' style={{width:"35%"}}>  </span></span>
            <p>MongoDB</p>
                  <span className='bar' data-percent = "35%"><span className='cplus' style={{width:"35%"}}>  </span></span>
            <p>RESTFUL API</p>
                  <span className='bar' data-percent = "40%"><span className='cplus' style={{width:"40%"}}>  </span></span>
           
     
        </div>
        <div className='card'>
            <h3>-OTHERS-</h3>
            {/* <span className='bar'></span> */}
            <p className='btc'></p>
            <p>DATA STRUCTURES AND ALGORITHMS</p>
                  <span className='bar' data-percent = "50%"><span className='cplus' style={{width:"50%"}}>  </span></span>
            <p> COMPUTER NETWORKS & OPERATING SYSTEM (BASIC)</p>
                  <span className='bar' data-percent = "45%"><span className='cplus' style={{width:"45%"}}>  </span></span>
    
            <p>AGILE</p>
                  <span className='bar' data-percent = "48%"><span className='cplus' style={{width:"48%"}}>  </span></span>
            <p>POSTMAN API</p>
                  <span className='bar' data-percent = "40.5%"><span className='cplus' style={{width:"40.5%"}}>  </span></span>
            <p>VISUAL STUDIO CODE</p>
                  <span className='bar' data-percent = "27.9%"><span className='cplus' style={{width:"27.9%"}}>  </span></span>
           
       
        </div>
      </div>
    </div>
  )
}

export default Aboutcard;
