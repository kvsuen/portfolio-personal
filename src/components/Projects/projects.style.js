import { makeStyles } from '@material-ui/core/styles';

const fontColor = '#17252A'

export default makeStyles(theme => ({
  root: {
    padding: '0 2.5rem',
    backgroundColor: '#f9fcff',
    minHeight: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: fontColor
  },
}));
