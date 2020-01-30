import { container } from '../assets/css/material-kit-react';

const landingPageStyle = (theme) => ({
  container: {
    zIndex: '12',
    color: theme.palette.text.primary,
    ...container,
  },
  main: {
    background: theme.palette.background.paper,
    position: 'relative',
    zIndex: '3',
    margin: '0 30px 0px 30px',
    borderRadius: theme.spacing(1),
    boxShadow: '6px 6px 24px 2px rgba(255, 255, 255, 0.14), 6px 6px 24px 5px rgba(255, 255, 255, 0.12), 0px 6px 1px -5px rgba(255, 255, 255, 0.12)',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
  },
  offer: {
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  offerPicture: {
    opacity: '1',
    borderRadius: theme.spacing(1),
  },
});

export default landingPageStyle;
