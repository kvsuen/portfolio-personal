import React from 'react';
import projectContent from './content';
import ProjectCard from './ProjectCard/project-card.component';

import Typography from '@material-ui/core/Typography';

import useStyles from './projects.style';

const Projects = ({ refProp }) => {
  const classes = useStyles();

  const projects = projectContent.map(project => {
    const { id, imageURL, projectTitle, projectDescription, stack } = project;
    return (
      <ProjectCard
        key={id}
        imageURL={imageURL}
        projectTitle={projectTitle}
        projectDescription={projectDescription}
        stack={stack}
      />
    );
  });

  return (
    <section id="projects" ref={refProp} className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h2" color="textPrimary" className={classes.title}>
          PROJECTS
        </Typography>
        <div className={classes.cardsContainer}>
          {projects}
        </div>
      </div>
    </section>
  );
};

export default Projects;
