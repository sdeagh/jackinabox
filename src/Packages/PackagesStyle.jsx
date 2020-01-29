import {
  container,
} from '../assets/css/material-kit-react';

const packagesStyle = (theme) => ({
  container: {
    ...container,
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
    paddingTop: '100px',
  },
  gridContainer: {
    flexGrow: 1,
    paddingBottom: theme.spacing(2),
  },
  gridItem: {
    textAlign: 'center',
  },
  heading: {
    padding: theme.spacing(2),
  },
});

export default packagesStyle;
