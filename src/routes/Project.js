import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroproject from '../components/Heroproject';
import {motion} from 'framer-motion';
// import Projectbox from '../components/Projectbox';
import ProjectList from '../components/ProjectList';
// import ProjectContainer from '../components/ProjectContainer';
const Project = () => {
  return (
    // <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth,transition:{duration:0.1}}}>
       <Navbar />
       <Heroproject  heading="PROJECTS" text="A Showcase of Innovation and Creativity"/>
       {/* <Projectbox /> */}
       {/* <ProjectContainer /> */}
       <ProjectList />
       <Footer />
    </motion.div>
  )
}

export default Project;
