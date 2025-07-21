import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react"
import gsap from "gsap"


const AnimatedHeader = () => {

  // use gsap to control animation delicatetly
  const contextRef = useRef(null)
  const headerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out"
    })

    tl.from(headerRef.current, {
      opacity: 0,
      y: "250",
      duration: 1,
      ease: "circ.out"
    }, "<+0.5")
  })


  return (
    <div ref={contextRef} className="animated-header_container">
      <div style={{clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"}} >
        <div ref={headerRef} className="">
          <p className='animated-header_subtitle'>Subtitle</p>
          <div className='animated-header_title_wrapper'>
            <h1 className="animated-header_title">Chihoon Kim</h1>
          </div>
        </div>
      </div>

      <div className="animated-header_container-bottom">
        <div className="animated-header_title_br" />
        <span className='animated-header_description-item custom-h5'>Lorem ipsum dolor sit amet.</span>
        <span className='animated-header_description-item custom-h5'>Lorem ipsum dolor sit amet.</span>
        <span className='animated-header_description-item custom-h5'>Lorem ipsum dolor sit amet.</span>
      </div>
    </div>
  )
}

export default AnimatedHeader
