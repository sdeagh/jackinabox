import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import drinksStyle from './DrinksStyle';

const useStyles = makeStyles(drinksStyle);

function Drinks() {
  const classes = useStyles();

  return (
    <div className={classes.test}>
      hello
    </div>
  );
}

export default Drinks;
