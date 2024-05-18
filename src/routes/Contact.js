import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroproject from '../components/Heroproject';
import ContactForm from '../components/ContactForm';
import {motion} from 'framer-motion';
const Contact = () => {
  return (
    // <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth ,transition:{duration:0.1}}}>
      <Navbar />
      <Heroproject heading="Contact" text="I Would Like To Work With You" />
      <ContactForm />
      <Footer />
    </motion.div>
  )
}

export default Contact;
