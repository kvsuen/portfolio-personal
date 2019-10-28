import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import { MdClose } from 'react-icons/md';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import useStyles from './modal-card.style';

const ModalCard = ({
  imageURL,
  github,
  projectTitle,
  projectDescription,
  stack,
  open,
  handleClose
}) => {
  const classes = useStyles();

  const chips = stack.map((item, index) => {
    return (
      <Chip key={index} label={item} className={classes.chip} color="primary" />
    );
  });

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Card className={classes.cardModal}>
          <CardMedia
            component="img"
            alt={projectTitle}
            image={imageURL}
            title={projectTitle}
            className={classes.image}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {projectTitle}
              <Button
                color="primary"
                target="_blank"
                rel="noopener"
                href={github}
                className={classes.button}
              >
                View Github
              </Button>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {projectDescription}
            </Typography>
          </CardContent>
          <CardContent className={classes.chipContainer}>{chips}</CardContent>
          <Typography
            variant="h4"
            className={classes.closeIcon}
            onClick={handleClose}
          >
            <MdClose />
          </Typography>
        </Card>
      </Fade>
    </Modal>
  );
};

export default ModalCard;
