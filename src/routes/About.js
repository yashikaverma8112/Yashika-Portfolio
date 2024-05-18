import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroproject from '../components/Heroproject';
import Aboutcontent from '../components/Aboutcontent';
import Aboutcard from '../components/Aboutcard';
import {color, motion} from 'framer-motion';
import Education from '../components/Education';
const About = () => {
  return (
    // <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth ,transition:{duration:0.1}}}>
      <Navbar  />
      <Heroproject heading="About Me" text="Building Innovative Web Solutions with MERN Stack "/>
     
      <Aboutcontent />
      <Aboutcard />
      <Education />
      <Footer />
    </motion.div>
  )
}

export default About;
