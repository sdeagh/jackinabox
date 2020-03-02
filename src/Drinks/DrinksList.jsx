import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import drinksListStyle from './DrinksListStyle';

const useStyles = makeStyles(drinksListStyle);

function DrinksList(props) {
  const { drinks, title } = props;
  const classes = useStyles();
  return (

    <Grid item xs={12}>
      <ExpansionPanel>
        <ExpansionPanelSummary classes={{ content: classes.content }}>
          <Grid container justify="center" alignItems="center" spacing={0}>

            <Grid item xs={12}>
              <div className={classes.logoTop} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.heading}>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.logoBottom} />

            </Grid>
          </Grid>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Grid container spacing={2}>

            {drinks.map((drink) => (
              <Grid item xs={12} md={6} lg={4}>
                <Typography variant="h6">
                  {drink.name}
                </Typography>
                <Typography variant="caption">
                  {drink.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>

      </ExpansionPanel>

    </Grid>
  );
}

export default DrinksList;
