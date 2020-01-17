import {
  container,
} from '../assets/css/material-kit-react';

const packagesStyle = (theme) => ({
  container: {
    ...container,
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
});

export default packagesStyle;
