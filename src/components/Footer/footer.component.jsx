import React from 'react';

import useStyles from './footer.style';

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      Kevin Suen © {new Date().getFullYear()}
    </footer>
  );
}
 
export default Footer;