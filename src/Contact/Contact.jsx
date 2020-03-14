import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// core components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

// @material-ui/icons
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import BackgroundImage from '../assets/img/jackbox1.jpeg';
// core components
import ContactForm from './ContactForm';

import ContactStyle from './ContactStyle';

const useStyles = makeStyles(ContactStyle);

function Contact() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter medium image={BackgroundImage} className={classes.back}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Please contact us for any questions or bookings.
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.mainRaised}>

        <div className={classes.container}>

          <div className={classes.contactWrapper}>

            <Grid container spacing={2} className={classes.gridContainer}>

              <Grid item md={6} sm={12} className={classes.gridItem}>
                <Paper className={classes.paper} elevation={10}>
                  <Typography variant="h5">Contact Us!</Typography>
                  <ContactForm />
                </Paper>
              </Grid>

              <Grid item md={6} sm={12} className={classes.gridItem}>
                <Paper className={classes.paper} elevation={10}>

                  <div className={classes.gridItem}>
                    <Typography variant="h5">Social</Typography>
                  </div>
                  <List>
                    <ListItem button>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText primary="info@jackinaboxbars.co.uk" />
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
                        <InstagramIcon />
                      </ListItemIcon>
                      <ListItemText primary="follow our story" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
};

export default Contact;
