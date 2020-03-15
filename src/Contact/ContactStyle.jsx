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
  mainRaised: {
    position: 'relative',
    margin: '-60px 30px 0px',
    borderRadius: theme.spacing(6),
  },
  itemLink: {
    padding: 0,
  },
});

export default ContactStyle;
