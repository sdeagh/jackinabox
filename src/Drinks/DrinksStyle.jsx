import {
  container,
} from '../assets/css/material-kit-react';

const drinksStyle = (theme) => ({
  container: {
    color: theme.palette.text.primary,
    zIndex: 12,
    ...container,
  },
  gridContainer: {
    flexGrow: 1,
    paddingBottom: theme.spacing(2),
  },
  gridItem: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
  logoTop: {
    borderTop: '3px solid black',
    borderLeft: '3px solid black',
    borderRight: '3px solid black',
    width: '100px',
    height: '37px',
    margin: '0 auto',
  },
  logoBottom: {
    borderBottom: '3px solid black',
    borderLeft: '3px solid black',
    borderRight: '3px solid black',
    width: '100px',
    height: '37px',
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  heading: {
    fontFamily: 'Courgette',
    color: 'black',
    fontWeight: '700',
    fontSize: '20px',
  },
  // main: {
  //   background: theme.palette.background.paper,
  //   position: 'relative',
  //   margin: '0 30px 0px 30px',
  //   borderRadius: theme.spacing(1),
  //   boxShadow: '6px 6px 24px 2px rgba(255, 255, 255, 0.14), 6px 6px 24px 5px rgba(255, 255, 255, 0.12), 0px 6px 1px -5px rgba(255, 255, 255, 0.12)',
  // },
  mainRaised: {
    position: 'relative',
    margin: '-60px 30px 0px',
    borderRadius: theme.spacing(6),
  },
});

export default drinksStyle;
