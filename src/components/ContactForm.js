import React, { useState } from "react";
import axios from 'axios';
import './Form.css';
const ContactForm = () => {
  
  const [msg,setMsg] = useState('');
  const [user, setUser] = useState({
    to: "",
    name: "",
    number: "",
    description: ""
  });

 
  // const {  to:name,to,number, description} = user;

  const onInputChange = e => {
   
      setUser({ ...user, [e.target.name]: e.target.value });
     
    
  };
 
  const onSubmit =  e => {
    e.preventDefault();
     axios.post("https://yashika-portfolio.onrender.com/contact/",user)
          .then(response => setMsg(response.data.respMesg));
               
  };
  return (
    <div className="container">
        
      <div    >  
      <div>
        
           
          <div className="form">
           
            <label>Your Name :</label>
            <input
              type="text"
              
              placeholder="Name"
              name="name"
              onChange={onInputChange}
              value={user.name}
            />
            <label>Your Email :</label>
            <input
              type="email"
              
              placeholder="Email"
              name="to"
              onChange={onInputChange}
              value={user.to}
            />
         
         <label>Your Contact Number :</label>
            <input
              type="number"
             
              placeholder="Contact Number"
              name="number"
              onChange={onInputChange}
              value={user.number}
            />
        <label>Your Message :</label>
            <textarea
              type="text"
             
              placeholder="Description"
              name="description"
              onChange={onInputChange}
              value={user.description}
            />
          </div>
          <p style={{color:"green",marginLeft:"400px"}}><b>{msg}</b></p>
          <button onClick={onSubmit} className="btnn btn btn-primary btn-block " >Send Mail</button>
       
      </div>
    </div>
  </div>  
  );
};
 
export default ContactForm;
