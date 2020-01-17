
import {
  container,
  transition,
  boxShadow,
} from '../assets/css/material-kit-react';

const drawerWidth = 240;

const headerStyle = (theme) => ({
  appBar: {
    display: 'flex',
    border: '0',
    borderRadius: '3px',
    marginBottom: '20px',
    color: theme.palette.text.primary,
    width: '100%',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'fixed',
    zIndex: '1100',
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  container: {
    ...container,
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  flex: {
    flex: 1,
  },
  title: {
    lineHeight: '30px',
    fontSize: '28px',
    borderRadius: '3px',
    fontFamily: 'Courgette',
    textDecoration: 'none',
    textTransform: 'none',
    color: 'inherit',
    padding: '8px 16px',
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent',
    },
  },
  appResponsive: {
    margin: '20px 10px',
  },
  // transparent: {
  //   backgroundColor: 'transparent !important',
  //   boxShadow: 'none',
  //   paddingTop: '25px',
  //   color: '#FFFFFF',
  // },
  dark: {
    color: theme.palette.text.primary,
    backgroundColor: `${theme.palette.common.black} !important`,
    boxShadow:
      '0 4px 20px 0px rgba(255, 255, 255, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)',
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    width: drawerWidth,
    ...boxShadow,
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0',
    ...transition,
  },
});

export default headerStyle;
