import React, { useState } from 'react';
import { useScrollPosition } from '../../../hooks/useScrollPosition';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useStyles from './tab-nav.style';

const TabNav = ({ aboutRef, projectsRef, scrollToRef }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (
        Math.abs(currPos.y) >=
          aboutRef.current.getBoundingClientRect().height &&
        Math.abs(prevPos.y) < aboutRef.current.getBoundingClientRect().height
      ) {
        setValue(1);
      } else if (
        Math.abs(currPos.y) <=
          aboutRef.current.getBoundingClientRect().height &&
        Math.abs(prevPos.y) > aboutRef.current.getBoundingClientRect().height
      ) {
        setValue(0);
      }
    },
    null,
    null,
    false,
    100
  );

  return (
    <Tabs value={value} onChange={handleChange} indicatorColor={'primary'}>
      <Tab
        label="About"
        className={classes.tab}
        onClick={() => scrollToRef(aboutRef)}
      />
      <Tab
        label="Projects"
        className={classes.tab}
        onClick={() => scrollToRef(projectsRef)}
      />
    </Tabs>
  );
};

export default TabNav;
