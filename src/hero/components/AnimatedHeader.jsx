import React from 'react'
import { motion } from 'motion/react'

const AnimatedHeader = () => {

  // use gsap to control animation delicatetly

  return (
    <div
      initial={{ y: 20}}
      animate={{ y : 0}}
      transition={{duration: 1, ease: "easeInOut"}}
      className="animated-header_container">
      <h4 className='header_subtitle'>Subtitle</h4>
      <div className="header_main-wrapper">
        <h1 
          initial={{ clipPath:  "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)"  }}
          transition={{ duration: 1, ease: "circOut" }}
          className='header_title custom-h1'>
          Chihoon Kim
        </h1>
        <div className='header_title_br' />
      </div>
      {/* <div className="header_description">
        <span className="header_description-item custom-h5">Lorem ipsum dolor sit amet.</span>
        <span className="header_description-item custom-h5">Lorem ipsum dolor sit amet.</span>
        <span className="header_description-item custom-h5">Lorem ipsum dolor sit amet.</span>
      </div> */}
    </div>
  )
}

export default AnimatedHeader
