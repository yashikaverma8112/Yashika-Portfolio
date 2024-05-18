import './Heroproject.css';
import React, { Component } from 'react';

class Heroproject extends Component {
    render(){

        return (
            <div className='hero-project'>
      <div className='heading'>
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    </div>
  )
}
}

export default Heroproject;
