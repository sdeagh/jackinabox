import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

// @material-ui/icons


// core components
import Typography from '@material-ui/core/Typography';
import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import Introduction from './Introduction';
import LandingPageStyle from './LandingPageStyle';

import BackgroundImage from '../assets/img/image004.jpg';
import FireworksImage from '../assets/img/fireworks.jpg';

function LandingPage(props) {
  const { classes } = props;
  return (
    <div>
      <Parallax filter image={BackgroundImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
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

      <div className={`${classes.main} ${classes.mainRaised}`}>
        <Parallax filter small image={FireworksImage}>
          <div className={classes.container}>
            hello
          </div>
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
