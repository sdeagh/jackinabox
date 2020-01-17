import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Parallax from '../Parallax/Parallax';

import BackgroundImage from '../assets/img/JIAB-FINAL-LOGO.jpg';
import packagesStyle from './PackagesStyle';

const useStyles = makeStyles(packagesStyle);

function Packages() {
  const classes = useStyles();
  return (
    <div className={classes.container} />
  );
}

export default Packages;
