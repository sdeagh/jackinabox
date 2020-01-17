import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// core components
import Button from '../components/CustomButtons/Button';

import styles from './HeaderLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/about" className={classes.navLink}>
          About
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/gallery" className={classes.navLink}>
          Gallery
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/packages" className={classes.navLink}>
          Packages
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/drinks" className={classes.navLink}>
          Drinks
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contact" className={classes.navLink}>
          Contact
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/JackInABoxBars"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fab fa-facebook`} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/JackInABoxBars"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fab fa-instagram`} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
