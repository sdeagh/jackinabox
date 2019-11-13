import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstaIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import HeaderLinksStyle from './HeaderLinksStyle';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/about" className={classes.navLink}>
          About
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/packages" className={classes.navLink}>
          Packages
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contact" className={classes.navLink}>
          Contact
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="https://facebook.com" className={classes.navLink}>
          <FacebookIcon />
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="https://instagram.com" className={classes.navLink}>
          <InstaIcon />
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="https://twitter.com" className={classes.navLink}>
          <TwitterIcon />
        </a>
      </ListItem>
    </List>
  );
}

HeaderLinks.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(HeaderLinksStyle)(HeaderLinks);
