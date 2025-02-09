import React from "react";
import "./Works.css";
import Illustrator from "../../img/illustrator.png";
import Reacta from "../../img/react.png";
import Javascript from "../../img/javascript.png";
import Wordpress from "../../img/wordpress.png";
import Github from "../../img/github.png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>WORKING WITH</span>
        <span>ALL THIS TOOLS</span>
        <span>
          Different projects require different tools.
          <br />
          At KEA, I worked with a lot of diverse tools.
          <br />
          These are just some of them.
        </span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 4.5, type: "spring" }}
          viewport={{ margin: "-40px" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Illustrator} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Github} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Wordpress} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reacta} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
