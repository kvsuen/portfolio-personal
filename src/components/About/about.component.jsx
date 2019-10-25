import React from 'react';

import './about.style.css';

const About = ({ refProp }) => {
  return (
    <section id="about" ref={refProp}>
      About
    </section>
  );
}
 
export default About;