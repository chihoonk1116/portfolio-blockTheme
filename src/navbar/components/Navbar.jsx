import React, { useEffect, useState } from "@wordpress/element";
import {AnimatePresence, motion, usePresence} from 'motion/react'

function NavigationMenu(){
  return(
    <ul className="wp-custom--nav-ul">
      <li className="wp-custom--nav-li">
        <a href="#home" className="wp-custom--nav-link">Home</a>
      </li>
      <li className="wp-custom--nav-li">
        <a href="#about" className="wp-custom--nav-link">About</a>
      </li>
      <li className="wp-custom--nav-li">
        <a href="#projects" className="wp-custom--nav-link">Projects</a>
      </li>
      <li className="wp-custom--nav-li">
        <a href="#contact" className="wp-custom--nav-link">Contact</a>
      </li>
    </ul>
  )
}

export const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: (delayValue) => ({
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2, delay: delayValue }
      }
    }),
    closed: (delayValue) => ({
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3, delay: delayValue }
      }
    })
};

  return( 
    <div className="wp-custom--nav-container">
      <div className="wp-custom--nav-wrapper">
        <div className="wp-custom--nav-title-wrapper">
          <p className="wp-custom--nav-title" href="">Chihoon Kim</p>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="custom-button wp-custom--nav-button"
        >
            click
        </button>
        <nav id="custom-desktop-nav">
          <NavigationMenu />
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            custom={0.3}
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav id="custom-mobile-nav">
              <NavigationMenu />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>

    
  )

};
