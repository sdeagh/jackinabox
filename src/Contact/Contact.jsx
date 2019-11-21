import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

// @material-ui/icons
// core components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import ContactForm from './ContactForm';
// core components

import ContactStyle from './ContactStyle';

function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.contactWrapper}>

      <Grid container spacing={2} className={classes.gridContainer}>

        <Grid item md={6} sm={12} className={classes.gridItem}>
          <Paper className={classes.paper} elevation={10}>
            <Typography variant="h5">Contact Us!</Typography>
            <ContactForm />
          </Paper>
        </Grid>

        <Grid item md={6} sm={12} className={classes.gridItem}>
          <div className={classes.gridItem}>
            <Typography variant="h5">Social</Typography>
          </div>
          <List>
            <ListItem button>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="jack@jackinabox.bar" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="07898 123456" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary="check out our facebook page" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemText primary="@ us" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText primary="follow our story" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(ContactStyle)(Contact);
