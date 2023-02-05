import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import logo1 from "./img/ae.png";
import logo2 from "./img/aws.png";
import logo3 from "./img/awss.png";
import logo4 from "./img/c.png";
import logo5 from "./img/c+.png";
import logo6 from "./img/github.png";
import logo7 from "./img/java.png";
import logo8 from "./img/javascript.png";
import logo9 from "./img/mui.png";
import logo10 from "./img/re.png";
import logo11 from "./img/pc.png";
import logo12 from "./img/python.png";
import logo13 from "./img/pr.png";
import logo14 from "./img/ht.png";
import logo15 from "./img/boo.png";
import logo16 from "./img/css.png";
import logo17 from "./img/pro.png";
import logo18 from "./img/jq.png";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRef } from "react";


function Techstack() {
  const constraintsRef = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []); 
  const shoot = () => {
    constraintsRef=null;
  } 
  return (
    <section class="section" id="portfolio">
      <div class="container text-center">
        <p  class="section-subtitle">Skills I Learnt</p>
     
        <h1 data-aos="fade-right"class="section-title mb-6 typewriter">Tech Stack</h1>
        
    


        <button onClick={shoot}>Take the shot!</button>
        <div class="container text-center-block ">
          <motion.div class="row md-row-cols-3 row-cols-4 justify-content-center conainer "ref={constraintsRef}>
   
    <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo1}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}
            />

    

            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo2}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}
            />

            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo3}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef} />

            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo4}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef} />

            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo5}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef} />

            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo6}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef} />

            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo7}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef} />

            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo8}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef} />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo9}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef} />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo10}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}   />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo11}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}   />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo12}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}   />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo13}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}   />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo14}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}  />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo15}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}   />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo16}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}   />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo17}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}   />
            <motion.img
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={logo18}
              height="60"
              width="60"
              alt=" v"
              drag dragConstraints={constraintsRef}   />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Techstack;
