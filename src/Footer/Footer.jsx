import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Favorite from '@material-ui/icons/Favorite';

import FooterStyle from './FooterStyle';

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <Typography variant="caption">
              &copy;
              {' '}
              {1900 + new Date().getYear()}
              {' '}
              Jack In A Box Ltd - made with
              {' '}
              <Favorite className={classes.icon} />
              {' '}
              by Maximus for a better web.
            </Typography>
          </List>
        </div>
        <div className={classes.right} />
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  whiteFont: true,
};

Footer.propTypes = {
  classes: PropTypes.objectOf(String).isRequired,
  whiteFont: PropTypes.bool,
};

export default withStyles(FooterStyle)(Footer);
