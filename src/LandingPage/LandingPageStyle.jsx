import { container } from '../assets/css/material-kit-react';

const landingPageStyle = (theme) => ({
  container: {
    zIndex: '12',
    color: theme.palette.text.primary,
    ...container,
  },
  title: {
    color: theme.palette.text.primary,
    margin: '1.75rem 0 0.875rem',
    textDecoration: 'none',
    fontWeight: '700',
    marginBottom: '1rem',
    minHeight: '32px',
    textAlign: 'center',
  },
  main: {
    background: theme.palette.background.paper,
    position: 'relative',
    zIndex: '3',
    margin: '0 30px 0px 30px',
    borderRadius: theme.spacing(1),
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  mainRaised: {
    margin: '-280px 30px 30px',
  },
  filter: {
    '&:before': {
      background: 'rgba(0, 0, 0, 0.5)',
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''",
    },
  },
});

export default landingPageStyle;
