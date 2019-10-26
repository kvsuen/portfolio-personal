import { makeStyles } from '@material-ui/core/styles';

const fontColor = '#17252A';

export default makeStyles(theme => ({
  chipContainer: {
    paddingTop: '0px'
  },
  chip: {
    marginTop: '10px',
    marginRight: '10px'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardModal: {
    outline: '0',
    borderRadius: '0',
    boxShadow:
      '4px 4px 2px -1px rgba(0,0,0,0.2), 3px 3px 2px 0px rgba(0,0,0,0.14), -3px 3px 5px 0px rgba(0,0,0,0.12)',
    width: '100%',
    margin: '1rem',
    maxHeight: '100vh',
    overflowY: 'auto',
    position: 'relative',

    '@media (min-width:420px) and (max-width:1080px)': {
      width: '40rem'
    },
    '@media (min-width:1081px)': {
      width: '50%'
    }
  },
  title: {
    color: fontColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '@media (min-width:500px)': {
      display: 'block'
    },
  },
  button: {
    padding: '0',
    '@media (min-width:500px)': {
      marginLeft: '15px'
    },
  },
  closeIcon: {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
    color: '#bbb',
    cursor: 'pointer'
  }
}));
