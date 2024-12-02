import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import "../style/footer.css";
const Footer = () => {
  return (
     <div className='mainfooter'>
      <div className='icon-div'>
      <FaGithub />
      <FaLinkedin />
      <FaSquareInstagram />
      <BsTwitterX />
      </div>
      <p className='pb-2'>Privacy
|
Terms
|
FAQs
|
Help</p>
       <p>Copyright © 2024 Your Website. All rights reserved.</p>
     </div>
     
      
  )
}
 export default Footer;