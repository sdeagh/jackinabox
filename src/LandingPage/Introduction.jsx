import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// import classNames from 'classnames';

import { Typography } from '@material-ui/core';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import IntroductionStyle from './IntroductionStyle';

const useStyles = makeStyles(IntroductionStyle);

function Introduction() {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Typography variant="body1" paragraph className={classes.description}>
          Thanks for visiting Jack in a Box bar website. By visiting our site
          you can learn about the services we offer such as bar hire, party organisation,
          all wedding and event hire.
        </Typography>
        <Typography variant="body1" paragraph className={classes.description}>
          All of our bars are custom built and we can specifically tailor them to
          your event. We are based in Kent but we able to travel across the UK if
          required. We can also stock our bars with any type of drinks or refreshments.
        </Typography>
        <Typography variant="body1" paragraph className={classes.description}>
          At the moment gin is a popular drink and one of the most popular products
          last summer has been our horse box bar being stocked up with a huge range
          of locally sourced gins and tonics.
        </Typography>
        <Typography variant="body1" paragraph className={classes.description}>
          Throughout Kent and Sussex we have provided bars and hired equipment
          for numerous events. Whether you are having a wedding or a birthday party
          or a wedding anniversary having one of our bars at your event will add a touch
          of class and provide a special experience for your guests.
        </Typography>
        <Typography variant="body1" paragraph className={classes.description}>
          We can personalise all of our services around your needs. Our bars can all
          be customised based on the colour theme of the event or however you require.
          Our bars are purpose-built for maximum entertainment and wow factor. We
          can even provide draught beers on request.
        </Typography>
        <Typography variant="body1" paragraph className={classes.description}>
          Our wedding hire is really popular too ranging from anything like marquees,
          disco, confetti to balloons. Alongside our bars it all ties in nicely and
          saves you one less phone call to arrange for the big day, so whatever your
          needs are for your wedding chances are we’ve got you covered.
        </Typography>
        <Typography variant="body1" paragraph className={classes.description}>
          If you have any questions about what we do or what services we offer
          the site should help you with these if not be sure to give us a call
          and we’ll be able to help!
        </Typography>
      </GridItem>
      <br />

    </GridContainer>
  );
}

History.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Introduction;
