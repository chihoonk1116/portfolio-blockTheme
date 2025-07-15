import React, { useEffect, useState } from "@wordpress/element";
import { FlipWords } from "./FlipWords";
import { Marquee } from "./Marquee";
import AnimatedHeader from "./AnimatedHeader";

export const Hero = () => {
  
  return( 
    
    <div className="wp-custom-container hero-container">
      <div className="hero-top">
        <div className="hero-container-left flex-center">
          <h1 className="flipword-wrapper">
            <FlipWords words={['Web', 'Frontend', 'Wordpress']} className='large' /> Developer
          </h1>
        </div>

        <div className="hero-container-right">
          <Marquee></Marquee>
          <Marquee></Marquee>
          <Marquee></Marquee>
        </div>
        <div className="marquee-top-gradient" />
        <div className="marquee-bottom-gradient" />
      </div>

      <AnimatedHeader/>


    </div>
    
  )

};
