import React, { useEffect, useState } from "@wordpress/element";
import { FlipWords } from "./FlipWords";

export const Hero = () => {
  
  return( 
    
    <div className="wp-custom-container hero-container">
      <div className="hero-container-left flex-center">
        <h1 className="flipword-wrapper">
          <FlipWords words={['Web', 'Frontend', 'Wordpress']} className='large' /> Developer
        </h1>
      </div>

      <div className="">

      </div>

    </div>
    
  )

};
