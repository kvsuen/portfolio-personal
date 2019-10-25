import React from 'react';

import useStyles from './projects.style';

const Projects = ({ refProp }) => {
  const classes = useStyles();

  return (
    <section id="projects" ref={refProp} className={classes.root}>
      Projects
    </section>
  );
}
 
export default Projects;