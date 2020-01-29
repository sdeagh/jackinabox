import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import packagesStyle from './PackagesStyle';
import BackgroundImage from '../assets/img/jackbox1.jpg';

const useStyles = makeStyles(packagesStyle);

function Packages() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter medium image={BackgroundImage} className={classes.back}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                We have 3 packages available. Each package has an initial rental charge.
                Prices do depend on location and number of guests.
                You can choose the menu.
                We accept cash, contactless and card payments.
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={`${classes.mainRaised}`}>
        <div className={classes.container}>
          <Grid container spacing={2} className={classes.gridContainer}>

            <Grid item md={12} sm={12} className={classes.gridItem}>
              <Paper className={classes.paper}>
                <div className={classes.logoTop} />
                <Typography variant="h5" className={classes.heading}>
                  Cash Bar
                </Typography>
                <div className={classes.logoBottom} />
                <Typography variant="body1">
                  There is a minimum spend requirement for most events.
                </Typography>
              </Paper>
            </Grid>

            <Grid item md={12} sm={12} className={classes.gridItem}>
              <Paper className={classes.paper}>
                <div className={classes.logoTop} />

                <Typography variant="h5" className={classes.heading}>
              Tab Bar
                </Typography>
                <div className={classes.logoBottom} />

                <Typography variant="body1">
              You can put some money behind the bar and set up a tab.
              Once the tab is spent, the bar will revert to a cash bar,
              where your guests will pay for their own drinks.
                </Typography>
              </Paper>
            </Grid>

            <Grid item md={12} sm={12} className={classes.gridItem}>
              <Paper className={classes.paper}>
                <div className={classes.logoTop} />

                <Typography variant="h5" className={classes.heading}>
              Open Bar
                </Typography>
                <div className={classes.logoBottom} />

                <Typography variant="body1">
              You offer your guests free drinks and we send you a detailed invoice post-event.
                </Typography>
              </Paper>
            </Grid>

          </Grid>

        </div>
      </div>
    </div>
  );
}

export default Packages;
