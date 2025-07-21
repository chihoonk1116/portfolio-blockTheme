import React, { useEffect, useState } from "@wordpress/element";
import { FlipWords } from "./FlipWords";
import { Marquee } from "./Marquee";
import AnimatedHeader from "./AnimatedHeader";
import { Particles } from "./Particles";
import CodeEditorArea from "./CodeEditorArea";

export const Hero = () => {
  
  return( 
    <>
    <div className="wp-custom-container hero-container">
      <div className="hero-top">
        <div className="hero-container_top-left">
          <div className="flipword-wrapper">
            <FlipWords words={['Web', 'Frontend', 'Wordpress']} className='large' /> 
            <span> Developer</span>
          </div>
          
        </div>

        <div className="hero-container_top-right">
          <CodeEditorArea/>
          {/* <Marquee></Marquee>
          <Marquee></Marquee>
          <Marquee></Marquee>
          <div className="marquee-top-gradient" />
          <div className="marquee-bottom-gradient" /> */}
        </div>
      </div>
      <div className="hero-bottom">
        <AnimatedHeader/>
      </div>
    </div>
    
    
    <Particles
        className="particles-container"
        quantity={1000}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </>
  )

};
