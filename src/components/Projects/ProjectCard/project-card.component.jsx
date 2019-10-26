import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';

import Typography from '@material-ui/core/Typography';

import useStyles from './project-card.styles';

const ProjectCard = ({ imageURL, projectTitle, projectDescription, stack }) => {
  const classes = useStyles();

  const chips = stack.map((item, index) => {
    return <Chip key={index} label={item} className={classes.chip} />;
  });

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={projectTitle}
          image={imageURL}
          title={projectTitle}
        />
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;

{
  /* <Card className={classes.card}>
<CardMedia
  component="img"
  alt={projectTitle}
  height="250"
  image={imageURL}
  title={projectTitle}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h2">
    {projectTitle}
  </Typography>
  <Typography variant="body2" color="textSecondary" component="p">
    {projectDescription}
  </Typography>
</CardContent>
<CardContent className={classes.chipContainer}>
  {chips}
</CardContent>
</Card> */
}
