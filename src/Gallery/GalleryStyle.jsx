import {
  container,
} from '../assets/css/material-kit-react';

const galleryStyle = (theme) => ({
  container: {
    color: theme.palette.text.primary,
    zIndex: 12,
    ...container,
  },
  mainRaised: {
    position: 'relative',
    margin: '-60px 30px 0px',
    borderRadius: theme.spacing(6),
  },
});

export default galleryStyle;
