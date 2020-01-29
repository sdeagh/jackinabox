import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import packagesStyle from './PackagesStyle';

const useStyles = makeStyles(packagesStyle);

function Packages() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={2} className={classes.gridContainer}>

        <Grid item md={6} sm={12} className={classes.gridItem}>
          <Paper>
            <Typography paragraph variant="h4" className={classes.heading}>
              Package 1
            </Typography>
            <Typography variant="body1">
            CASH BAR
There is a minimum spend requirement for most events.
            </Typography>
          </Paper>
        </Grid>

        <Grid item md={6} sm={12} className={classes.gridItem}>
          <Paper>
            <Typography paragraph variant="h4" className={classes.heading}>
              Package 2
            </Typography>
            <Typography variant="body1">
            TAB BAR
You can put some money behind the bar and set up a tab.
Once the tab is spent, the bar will revert to a cash bar, where your guests will pay for their own drinks.
            </Typography>
          </Paper>
        </Grid>

        <Grid item md={6} sm={12} className={classes.gridItem}>
          <Paper>
            <Typography paragraph variant="h4" className={classes.heading}>
              Package 3
            </Typography>
            <Typography variant="body1">
            OPEN BAR
You offer your guests free drinks and we send you a detailed invoice post-event. 


            </Typography>
          </Paper>
        </Grid>

      </Grid>

    </div>
  );
}

export default Packages;
