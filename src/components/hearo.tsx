import Image from "next/image";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";

import "../style/hearo.css";


function Hearo() {
   return (
      <main className="main-hearo">
         {/* 1st box */}
         <div className="hearo-content">
         <h1>Hello  I am Hasnain Abass</h1>
            <p>
               <span>Explore Now ....................!</span>

               As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.</p>
            <p>
               With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible</p>
            <div className="icons-div">
               <div className="icons">
                  <FaFacebookF />
               </div>
               <div className="icons">
                  <FaTwitter />
               </div>
               <div className="icons">
                  <TbWorld />
               </div>
               <div className="icons">
                  <FaLinkedinIn />
               </div>
               <div className="icons">
                  <IoLogoGoogleplus />
               </div>
            </div>
         </div>
         {/* 2nd box */}
         <div className="img-div">
            <Image src={"/Hasnainabass.png"} width={500} height={520} alt="hasnain" />
         </div>

      </main>
   )
}

export default Hearo;