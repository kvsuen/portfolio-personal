import { makeStyles } from '@material-ui/core/styles';

const fontColor = '#17252A'

export default makeStyles(theme => ({
  footer: {
    backgroundColor: '#f9fcff',
    color: fontColor,
    fontFamily: 'Raleway, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5px'
  }
}));