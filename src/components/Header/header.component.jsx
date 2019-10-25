import React from 'react';
import TabNav from './TabNav/tab-nav.component';
import CollapsedNav from './CollapsedNav/collapsed-nav.component';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fade from '@material-ui/core/Fade';

import useStyles from './header.style';
import { classDeclaration } from '@babel/types';

const Header = ({ aboutRef, projectsRef }) => {
  const classes = useStyles();

  const ElevationScroll= ({ children }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });

    return React.cloneElement(children, {
      elevation: trigger ? 0 : 0,
      className: trigger ? classes.navElevated : classes.nav
    });
  }

  const scrollToRef = ref => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  return (
    <ElevationScroll>
      <AppBar className={classes.nav}>
        <Toolbar className={classes.toolbar}>
          <Fade in timeout={1500}>
            <div className={classes.titleContainer}>
              <Typography variant="h5" className={classes.title}>
                kevin suen &nbsp;
              </Typography>
              <Typography
                variant="h5"
                className={classes.subTitle}
              ></Typography>
            </div>
          </Fade>

          <div className={classes.link}>
            <TabNav aboutRef={aboutRef} projectsRef={projectsRef} scrollToRef={scrollToRef} />
          </div>

          <div className={classes.menuButton}>
            <CollapsedNav aboutRef={aboutRef} projectsRef={projectsRef} scrollToRef={scrollToRef} />
          </div>

        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
