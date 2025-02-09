import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience_big">
      <div className="experience_div">
        <span>WHAT</span>
        <span>YOU GET?</span>
      </div>
      <div className="experience" id="Experience">
        <div className="achievement">
          <div className="circle">10</div>
          <span>weeks of</span>
          <span>intern</span>
        </div>
        <div className="achievement">
          <div className="circle">8</div>
          <span>hours</span>
          <span>a day</span>
        </div>
        <div className="achievement">
          <div className="circle">0</div>
          <span>danish</span>
          <span>krone</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
