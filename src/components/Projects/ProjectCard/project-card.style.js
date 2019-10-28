import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    width: '100%',
    margin: '1rem 0',
    transition: 'transform .25s ease-in-out, box-shadow 0.25s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0px 3px 6px 3px rgba(0,0,0,0.4)'
    },
    '@media (min-width:420px) and (max-width:1080px)': {
      width: '22.5rem',
      margin: '1rem',
    },
    '@media (min-width:1081px) and (max-width:2200px)': {
      width: '27.5rem',
      margin: '1rem',
    },
    '@media (min-width:2200px)': {
      width: '100%',
      margin: '0',
    }
  }
}));
