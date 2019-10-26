import { makeStyles } from '@material-ui/core/styles';

const bp = '768px'
const fontColor = '#17252A'

export default makeStyles({
  card: {
    width: '100%',
    margin: '1rem',
    '@media (min-width:420px) and (max-width:1080px)': {
      width: '22.5rem',
    },
    '@media (min-width:1081px)': {
      width: '27.5rem',
    },
  },
  chipContainer: {
    paddingTop: '0px'
  },
  chip: {
    marginTop: '10px',
    marginRight: '10px'
  }
});