import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

// @material-ui/icons

// core components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import Introduction from './Introduction';
import LandingPageStyle from './LandingPageStyle';

import BackgroundImage from '../assets/img/jackbox1.jpg';
import FireworksImage from '../assets/img/fireworks4.jpg';

function LandingPage(props) {
  const { classes } = props;
  return (
    <div>
      <Parallax filter image={BackgroundImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Typography variant="h3" gutterBottom color="inherit">
                Jack In A Box
              </Typography>
              <Typography variant="h5" gutterBottom color="inherit">
                We&apos;d love to pop up at your next event
              </Typography>
              <br />
            </GridItem>

          </GridContainer>
        </div>
      </Parallax>

      <div className={`${classes.mainRaised}`}>
        <Parallax small image={FireworksImage} className={classes.offerPicture}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.offer}>
              <Typography variant="h3" paragraph>
                Happy 2020
              </Typography>
              <Typography variant="h6">
                Enjoy 20% off all bookings made in January & February
              </Typography>
            </Grid>
          </Grid>
        </Parallax>
      </div>

      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <Introduction />
        </div>
      </div>
    </div>

  );
}

LandingPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(LandingPageStyle)(LandingPage);
