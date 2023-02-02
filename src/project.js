import React from "react";
import { motion } from "framer-motion"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import logo1 from "./img/ae.png"
import logo2 from "./img/aws.png"
import logo3 from "./img/awss.png"
import logo4 from "./img/c.png"
import logo5 from "./img/c+.png"
import logo6 from "./img/github.png"
import logo7 from "./img/java.png"
import logo8 from "./img/javascript.png"
import logo9 from "./img/mui.png"
import logo10 from "./img/re.png"
import logo11 from "./img/pc.png"
import logo12 from "./img/python.png"
import logo13 from "./img/pr.png"
import logo14 from "./img/ht.png"
import logo15 from "./img/boo.png"
import logo16 from "./img/css.png"
import logo17 from "./img/pro.png"
import logo18 from "./img/jq.png"
import "./App.css"
import AOS from 'aos';
import { useEffect } from "react";

function Project(){
    useEffect(() => {
        AOS.init();
      }, []);
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    return(
        <section class="section" id="portfolio">
            
        <div class="container text-center">
            <p class="section-subtitle">What I Did ?</p>
            <h6 class="section-title mb-6">Portfolio</h6>
      
               
       <div class="container text-center-block ">
  <div class="row md-row-cols-3 row-cols-4 justify-content-center "  >
  <motion.div
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
><img src={logo2} height="60" width="60"alt=" v" /> 
 </motion.div>   



 
  
  <img src={logo3}  height="60" width="60"></img>  
  <img src={logo4}  height="60" width="60"alt=" d"/>
  <img src={logo5}  height="60" width="60"alt=" v"/>
  <img src={logo6}  height="60" width="60"alt=" v"/>  
  <img src={logo7}  height="60" width="60"alt=" v"/>  
  <img src={logo8}  height="60" width="60"alt=" v"/>
  <img src={logo9}  height="60" width="60"alt=" v"/>
  <img src={logo10}  height="60" width="60"alt=" v"/>  
  <img src={logo11}  height="60" width="60"alt=" v"/>  
  <img src={logo12}  height="60" width="60"alt=" v"/>
  <img src={logo13}  height="60" width="60"alt=" v"/>
  <img src={logo14}  height="60" width="60"alt=" v"/>
  <img src={logo15}  height="60" width="60"alt=" v"/>
  <img src={logo16}  height="60" width="60"alt=" v"/>
  <img src={logo17}  height="60" width="60"alt=" v"/>
  <img src={logo18}  height="60" width="60"alt=" v"/>
 
  </div>
</div>     
 {/* <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    <motion.div>wvwvwv</motion.div>
      <motion.li  className="item" variants={item} />
  
  </motion.ul> */}


              
             
         
        </div>
    </section>
    );
}
export default Project;