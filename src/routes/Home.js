import React from 'react'; 
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import '../App.css'
const Home = () => {
  return (
    // <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth ,transition:{duration:0.1}}}>
     <Navbar />
     <Heroimg /> 
     <Footer />
    </motion.div>
  
   
  )
}

export default Home;
