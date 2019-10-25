import { makeStyles } from '@material-ui/core/styles';

const bp = '768';

export default makeStyles(theme => ({
  nav: {
    backgroundColor: '#f9fcff',
    color: '#17252A',
    padding: '0 2.5rem',
    marginTop: '15px'
  },
  navElevated: {
    backgroundColor: '#f9fcff',
    color: '#17252A',
    padding: '0 2.5rem',
    boxShadow: `
      0px 5px 4px -4px rgba(0,0,0,0.2), 
      0px 9px 5px -5px rgba(0,0,0,0.14), 
      0px 11px 10px -10px rgba(0,0,0,0.12)`
  },
  toolbar: {
    flexGrow: 1,
    width: '100%',
    margin: 'auto',
    maxWidth: '60rem',
    padding: '0'
  },
  titleContainer: {
    flexGrow: 1
  },
  title: {
    // flexGrow: 1,
    display: 'inline-block',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '600'
  },
  subTitle: {
    [theme.breakpoints.up(bp)]: {
      '&::before': {
        content: "'| \\00a0 full stack developer'"
      }
    },
    // flexGrow: 1,
    display: 'inline-block',
    fontFamily: 'Raleway, sans-serif'
  },
  link: {
    [theme.breakpoints.down(bp)]: {
      display: 'none'
    },
    color: '#17252A',
    margin: 'auto 10px'
  },
  menuButton: {
    [theme.breakpoints.up(bp)]: {
      display: 'none'
    },
    padding: '0'
  }
}));
