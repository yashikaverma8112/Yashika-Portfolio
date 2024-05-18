// import './Form.css';
import React from 'react';

class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        password: '',
        validName: false,
        validMessage: false,
        validPnumber: false,
        validUsername: false
    }
}
  handleUserInput(e){
    const name = e.target.name;

    const value = e.target.value;
    this.setState({ [name]: value });
    if (name === "nameofperson") {
        this.setState({ validName: value.length > 5 });
    }
    if (name === "username") {
        this.setState({ validName: value.length > 15 });
    }
    if (name === "pnumber") {
        this.setState({ validName: value.length === 10 });
    }
    if (name === "message") {
        this.setState({ validName: value.length > 5 });
    }


    if (name === "password") {
        this.setState({ validPassword: value.length > 8 });
    }
    console.log(name, value);
  }
  submit = (e) => {
    e.preventDefault();
    if (!this.state.validName || !this.state.validUsername || !this.state.validPnumber || !this.state.validMessage ) {
        alert("Invalid Input");
    }
    else {
        alert("Form submitted Successfully");
    }
}
// Form.addEventListener('submit',(e)=>{
//   e.preventDefault();
//   let formData={
//       name:nameofperson.value,
//       email:username.value,
//       number:pnumber.value,
//       message:message.value
  
//   }
//   let xhr=new XMLHttpRequest();
//   xhr.open('POST','/');
//   xhr.setRequestHeader('content-type',appication/json);
//   xhr.onload=function(){
//       console.log(xhr.responseText);
//       if(xhr.responseText=='success'){
//           alert('Email  Sent');
//           name.value='';
//           email.value='';
//           number.value='';
//           message.value='';
//       }
//       else{
//           alert('Please Enter a valid input');
//       }
//   }
//   xhr.send(formData)
//   }
//   )
  render(){

  
  return (
    <div className='form'>
    
        <label>Your Name</label>
        <input type='text'  name='name' value={this.state.nameofperson} onChange={(e) => this.handleUserInput(e)}></input>
        <label>Your Email</label>
        <input type='email'  name='email' value={to} onChange={(e) => this.handleUserInput(e)}></input>
        <label>Your Number</label>
        <input type='number'  name='phone' value={this.state.pnumber} onChange={(e) => this.handleUserInput(e)}></input>
        <label>Message</label>
       <textarea name='message' value={this.state.message} rows="6" onChange={(e) => this.handleUserInput(e)} placeholder='Type Your Message here'/>
       <button className='btn' onChange={(e) => this.submit(e)} >Submit</button>


    
      
    </div>
  )
}}

export default Form;
// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // send form data to server-side
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <label>
//         Message:
//         <textarea name="message" value={formData.message} onChange={handleChange} />
//       </label>
//       <button type="submit">Send Message</button>
//     </form>
//   );
// };

// export default Form;
