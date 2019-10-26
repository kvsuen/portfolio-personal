import React from 'react';
import projectContent from './content';
import ProjectCard from './ProjectCard/project-card.component';

import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';

import useStyles from './projects.style';

const Projects = ({ refProp }) => {
  const classes = useStyles();

  const projects = projectContent.map(project => {
    const {
      id,
      imageURL,
      github,
      projectTitle,
      projectDescription,
      stack
    } = project;
    return (
      <ProjectCard
        id={id}
        key={id}
        imageURL={imageURL}
        github={github}
        projectTitle={projectTitle}
        projectDescription={projectDescription}
        stack={stack}
      />
    );
  });

  return (
    <section id="projects" ref={refProp} className={classes.root}>
      <div className={classes.container}>
        <Fade delay={100}>
          <Typography
            variant="h3"
            color="textPrimary"
            className={classes.title}
          >
            PROJECTS
          </Typography>
          <div className={classes.titleBar}></div>
        </Fade>
        <div className={classes.cardsContainer}>{projects}</div>
      </div>
    </section>
  );
};

export default Projects;
