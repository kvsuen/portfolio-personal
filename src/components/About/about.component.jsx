import React, { useState, useEffect } from 'react';

import './about.style.css';

const About = ({ refProp }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(window.VANTA.BIRDS({
        el: refProp.current,
        backgroundColor: '#f9fcff',
        color1: 0x282378,
        color2: 0x24798c,
        birdSize: 1.50,
        wingSpan: 35.00,
        separation: 70.00,
        quantity: 3.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, refProp])

  return (
    <section id="about" ref={refProp}>
      About
    </section>
  );
}
 
export default About;