import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import useStyles from './about.style';

const About = ({ refProp }) => {
  const classes = useStyles();

  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.BIRDS({
          el: refProp.current,
          backgroundColor: '#f9fcff',
          color1: 0x282378,
          color2: 0x24798c,
          birdSize: 1.5,
          wingSpan: 35.0,
          separation: 50.0,
          quantity: 2.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, refProp]);

  return (
    <section id="about" ref={refProp} className={classes.root}>
      <div className={classes.textContainer}>
        <Typography
          variant="h2"
          color="textPrimary"
          className={classes.greeting}
        >
          Hello,
        </Typography>
        <Fade in timeout={1500}>
          <Typography variant="h1" color="textPrimary" className={classes.name}>
            I'm Kevin,
          </Typography>
        </Fade>
        <Typography
          variant="h5"
          color="textPrimary"
          className={classes.subText}
        >
          I'm a full stack developer who is passionate about learning, creating
          impactful applications, and all things coding. My core competencies
          include Node.js, React/Redux, Ruby on Rails, and Python.
        </Typography>

        <div className={classes.links}>
          <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/kvsuen"
            color="inherit"
            underline="none"
            className={classes.icon}
          >
            <FaGithubSquare />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/kevin-suen/"
            color="inherit"
            underline="none"
            className={classes.icon}
          >
            <FaLinkedin />
          </Link>
          <Typography
            variant="h6"
            color="textPrimary"
            className={classes.email}
          >
            | kevinsuen91@gmail.com
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default About;
