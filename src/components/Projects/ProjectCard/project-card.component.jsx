import React, { useState } from 'react';
import ModalCard from './modal-card.component';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import useStyles from './project-card.style';

const ProjectCard = ({
  imageURL,
  github,
  projectTitle,
  projectDescription,
  stack
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            alt={projectTitle}
            image={imageURL}
            title={projectTitle}
          />
        </CardActionArea>
      </Card>

      <ModalCard
        imageURL={imageURL}
        github={github}
        projectTitle={projectTitle}
        projectDescription={projectDescription}
        stack={stack}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default ProjectCard;
