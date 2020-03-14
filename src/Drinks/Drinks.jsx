import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import DrinksList from './DrinksList';
import beers from './beers';
import gins from './gins';
import ciders from './ciders';
import wines from './wines';
import nonAlcoholic from './nonalcholic';

import drinksStyle from './DrinksStyle';
import BackgroundImage from '../assets/img/jackbox1.jpeg';

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

            <DrinksList drinks={gins} title="Gin" />
            <DrinksList drinks={beers} title="Beer" />
            <DrinksList drinks={ciders} title="Cider" />
            <DrinksList drinks={wines} title="Wine" />
            <DrinksList drinks={nonAlcoholic} title="Non Alcoholic" />

          </Grid>
        </div>

      </div>
    </div>
  );
}

export default Drinks;
