import React from "react";
import { motion } from "motion/react";
import SkillCard from "./SkillCard";

export const Marquee = ({speed = 10}) =>{


  return(
    <div className="marquee-container">
      <div className="marquee-content-wrapper">
        <div className="marquee-content">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        <div className="marquee-content">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        <div className="marquee-content">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        <div className="marquee-content">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        
      </div>
    </div>
  )

}