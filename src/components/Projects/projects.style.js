import { makeStyles } from '@material-ui/core/styles';

const bp = '768px'
const fontColor = '#17252A'

export default makeStyles(theme => ({
  root: {
    padding: '0',
    backgroundColor: '#f9fcff',
    // backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: fontColor,
    boxShadow: 'inset 0px 50px 100px -50px rgba(0,0,0,0.2)',
    [`@media (min-width:420px)`] : {
      padding: '0 2.5rem'
    },
  },
  title: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '700',
    margin: '75px auto 25px auto'
  },
  titleBar: {
    height: '0px',
    border: `2px solid ${fontColor}`,
    width: '7.5%',
    marginBottom: '10px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '60rem',
    padding: '0',
    marginBottom: '50px',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    [`@media (min-width:${bp})`] : {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
  }
}));
