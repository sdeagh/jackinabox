import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import beers from './beers';
import gins from './gins';

import drinksStyle from './DrinksStyle';
import BackgroundImage from '../assets/img/jackbox1.jpg';

const useStyles = makeStyles(drinksStyle);

function Drinks() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter medium image={BackgroundImage} className={classes.back}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Typography variant="h6" gutterBottom paragraph className={classes.title}>
                We are very flexible and our choice of soft and alcoholic drinks is very wide.
              </Typography>
              <Typography variant="h6" gutterBottom className={classes.title}>
                We think you will love these...
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={`${classes.mainRaised}`}>
        <div className={classes.container}>
          <Grid container spacing={2} className={classes.gridContainer}>

            <Grid item md={12} sm={12} className={classes.gridItem}>
              <ExpansionPanel>
                <ExpansionPanelSummary classes={{ content: classes.content }} className={classes.expansionSummary}>

                  <div className={classes.logoTop} />
                  <Typography variant="h5" className={classes.heading}>
                    Gin
                  </Typography>
                  <div className={classes.logoBottom} />

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Paper className={classes.paper}>
                    <Typography paragraph variant="body1">
                  All served with Fever-Tree or Schweppes Tonic
                    </Typography>

                    { gins.map((gin) => (
                      <div>
                        <Typography variant="h6">
                          {gin.name}
                        </Typography>
                        <Typography paragraph variant="caption">
                          {gin.description}
                        </Typography>
                      </div>

                    ))}

                  </Paper>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>

            <Grid item md={12} sm={12} className={classes.gridItem}>
              <Paper className={classes.paper}>
                <div className={classes.logoTop} />
                <Typography variant="h5" className={classes.heading}>
                  Beer
                </Typography>
                <div className={classes.logoBottom} />

                { beers.map((beer) => (
                  <Typography variant="h6">
                    {beer.name}
                  </Typography>
                ))}

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

export default Drinks;
