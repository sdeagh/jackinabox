import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Grid from '@material-ui/core/Grid';

const style = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto',
  },
};

function GridContainer({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: '',
};

GridContainer.defaultProps = {
  children: null,
};

GridContainer.propTypes = {
  classes: PropTypes.objectOf(String).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default withStyles(style)(GridContainer);
