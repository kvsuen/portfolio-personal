import React, { useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useStyles from './tab-nav.style'

const TabNav = ({ aboutRef, projectsRef, scrollToRef }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} indicatorColor={'primary'}>
      <Tab label="About" className={classes.tab} onClick={() => scrollToRef(aboutRef)}/>
      <Tab label="Projects" className={classes.tab} onClick={() => scrollToRef(projectsRef)}/>
    </Tabs>
  );
};

export default TabNav;
