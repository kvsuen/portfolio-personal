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
  textContainer: {
    width: '100%',
    margin: 'auto',
    maxWidth: '60rem',
    padding: '0'
  },
  greeting: {
    fontWeight: '500',
    color: fontColor
  },
  name: {
    fontWeight: '900',
    color: fontColor,
    fontSize: '2.75rem',
    '@media (min-width:601px) and (max-width:960px)': {
      fontSize: '3.75rem',
    },
    '@media (min-width:961px) and (max-width:1280px)': {
      fontSize: '4.75rem',
    },
    '@media (min-width:1281px)': {
      fontSize: '4.75rem'
    },
  },
  subText: {
    fontWeight: '300',
    color: fontColor,
    marginTop: '15px'
  },
  links: {
    marginTop: '15px',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '0.8',
    '@media (min-width:601px) and (max-width:960px)': {
      fontSize: '1.25rem',
    },
    '@media (min-width:961px) and (max-width:1280px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width:1281px)': {
      fontSize: '1.75rem'
    },
  },
  icon: {
    marginRight: '10px',
    color: fontColor,
  },
  email: {
    display: 'inline-block',
    fontWeight: '300',
    fontSize: '0.9rem',
    color: fontColor,
    '@media (min-width:601px) and (max-width:960px)': {
      fontSize: '1.125rem',
    },
    '@media (min-width:961px) and (max-width:1280px)': {
      fontSize: '1.25rem',
    },
    '@media (min-width:1281px)': {
      fontSize: '1.25rem'
    },
  }
}));
