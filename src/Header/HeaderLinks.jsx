import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstaIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '../components/CustomButtons/Button';

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
        <Tooltip
          id="instagram-twitter"
          title="Follow us on fb"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://facebook.com/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FacebookIcon className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on insta"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://instagram.com/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <InstaIcon className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <TwitterIcon className={classes.socialIcons} />
          </Button>
        </Tooltip>
      </ListItem>

    </List>
  );
}

HeaderLinks.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(HeaderLinksStyle)(HeaderLinks);
