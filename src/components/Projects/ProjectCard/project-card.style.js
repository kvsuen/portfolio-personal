import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    width: '100%',
    margin: '1rem 0',
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
