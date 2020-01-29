import { container } from '../assets/css/material-kit-react';

const ContactStyle = (theme) => ({
  container: {
    zIndex: '12',
    color: theme.palette.text.primary,
    ...container,
  },
  gridContainer: {
    flexGrow: 1,
    paddingTop: '100px',
    paddingBottom: theme.spacing(2),
  },

  contactWrapper: {
    width: '100%',
  },
  gridItem: {
    textAlign: 'center',
  },
  paper: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
  },
});

export default ContactStyle;
