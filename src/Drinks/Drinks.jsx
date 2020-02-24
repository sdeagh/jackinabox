import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';


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
            <GridItem xs={12} sm={12} md={6}>
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
              <Paper className={classes.paper}>
                <div className={classes.logoTop} />
                <Typography variant="h5" className={classes.heading}>
                  Gin&apos;tastic&apos;
                </Typography>
                <div className={classes.logoBottom} />
                <Typography variant="body1">
                  All served with Fever Tree or Schweppes Tonic
                </Typography>
                <List>
                  <ListItem>
                Warner&apos;s
                  </ListItem>
                  <ListItem>
                Monkey 47
                  </ListItem>
                  <ListItem>
                Bombay Sapphire
                  </ListItem>
                  <ListItem>
                Tanqueray No. 10
                  </ListItem>
                  <ListItem>
                Salcombe
                  </ListItem>
                  <ListItem>
                  <Typography>
                Cambridge Dry
                </Typography>
                <Typography paragraph variant="caption">
                Cambridge Distillery is a small distillery based in Cambridge, England and is owned and run by Will and Lucy Lowe. The distillery specializes in seasonal gins and tailored gins - custom made gins created for individuals and groups based on their personal tastes. However, the distillery has recently released its own flagship expression, Cambridge Dry Gin. This gin is made with eight botanicals: Macedonian juniper, blackcurrant leaf, basil, rosemary, lemon verbena, rose petals, violet petals, and angelica. Each botanical is infused and distilled individually with small batches of the spirit. The final product is then bottled at 42% ABV.
                </Typography>
                </ListItem>
                  <ListItem>
                Brighton
                  </ListItem>
                  <ListItem>
                Black down Sussex
                  </ListItem>
                  <ListItem>
                Pinkster
                  </ListItem>
                  <ListItem>
                Sloe
                  </ListItem>
                </List>
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

export default Drinks;
