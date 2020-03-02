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
import ciders from './ciders';
import wines from './wines';

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
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item xs={12}>

              <ExpansionPanel>

                <ExpansionPanelSummary classes={{ content: classes.content }}>
                  <Grid container justify="center" alignItems="center" spacing={0}>
                    <Grid item xs={12}>
                      <div className={classes.logoTop} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" className={classes.heading}>
                        Gin
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.logoBottom} />
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                  <Paper className={classes.paper}>
                    <Typography paragraph variant="body1" className={classes.subHeading}>
                      All served with Fever-Tree or Schweppes Tonic
                    </Typography>
                    {gins.map((gin) => (
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

            <Grid item xs={12}>
              <ExpansionPanel>
                <ExpansionPanelSummary classes={{ content: classes.content }}>
                  <Grid container justify="center" alignItems="center" spacing={0}>

                    <Grid item xs={12}>
                      <div className={classes.logoTop} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" className={classes.heading}>
                        Beer
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.logoBottom} />

                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                  <Grid container spacing={2}>

                    {beers.map((beer) => (
                      <Grid item xs={12} md={6} lg={4}>
                        <Typography variant="h6">
                          {beer.name}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </ExpansionPanelDetails>

              </ExpansionPanel>

            </Grid>

            <Grid item xs={12}>
              <ExpansionPanel>
                <ExpansionPanelSummary classes={{ content: classes.content }}>
                  <Grid container justify="center" alignItems="center" spacing={0}>

                    <Grid item xs={12}>
                      <div className={classes.logoTop} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" className={classes.heading}>
                        Cider
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.logoBottom} />

                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                  <Grid container spacing={2}>

                    {ciders.map((cider) => (
                      <Grid item xs={12} md={6} lg={4}>
                        <Typography variant="h6">
                          {cider.name}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </ExpansionPanelDetails>

              </ExpansionPanel>

            </Grid>

            <Grid item xs={12}>
              <ExpansionPanel>
                <ExpansionPanelSummary classes={{ content: classes.content }}>
                  <Grid container justify="center" alignItems="center" spacing={0}>

                    <Grid item xs={12}>
                      <div className={classes.logoTop} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" className={classes.heading}>
                        Wine
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.logoBottom} />

                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                  <Grid container spacing={2}>

                    {wines.map((wine) => (
                      <Grid item xs={12} md={6} lg={4}>
                        <Typography variant="h6">
                          {wine.name}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </ExpansionPanelDetails>

              </ExpansionPanel>

            </Grid>

          </Grid>
        </div>

      </div>
    </div>
  );
}

export default Drinks;
