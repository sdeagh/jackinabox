import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import Typography from '@material-ui/core/Typography';
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
      <Parallax filter size="large" image={BackgroundImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Typography variant="h2" gutterBottom color="inherit">
                We&apos;d love to pop up at your next event
              </Typography>
              <br />
              {/* <div style={{
                backgroundImage: `url(${FireworksImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                textAlign: 'center',
                padding: '30px 30px 30px 30px',
                borderRadius: '8px',
              }}
              >
                <Typography variant="h4" paragraph>
                  Happy 2020
                </Typography>
                <Typography variant="body2">
                  Enjoy 20% off all bookings made in January & February
                </Typography>
              </div> */}
            </GridItem>


          </GridContainer>
        </div>
      </Parallax>

      <div className={`${classes.main} ${classes.mainRaised}`}>
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
