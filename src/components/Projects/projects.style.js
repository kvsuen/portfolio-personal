import { makeStyles } from '@material-ui/core/styles';

const bp = '768px'
const fontColor = '#17252A'

export default makeStyles(theme => ({
  root: {
    padding: '0',
    backgroundColor: '#009688',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: fontColor,
    [`@media (min-width:420px)`] : {
      padding: '0 2.5rem'
    },
  },
  title: {
    margin: '75px auto 50px auto'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '60rem',
    padding: '0'
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
