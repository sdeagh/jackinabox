import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
// import classNames from 'classnames';

import { Typography } from '@material-ui/core';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import HistoryStyle from './HistoryStyle';

function History(props) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Typography variant="h5" className={classes.title}>
            Our Offerings
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Bar description goes here
            <br />
            <br />
            More info here
            <br />
            <br />
            yet more
            <br />
            <br />
            even more...
          </Typography>
        </GridItem>
      </GridContainer>
    </div>
  );
}

History.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(HistoryStyle)(History);
