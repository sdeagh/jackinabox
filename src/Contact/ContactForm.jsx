import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ContactFormStyle from './ContactFormStyle';

function ContactForm(props) {
  const { classes } = props;

  return (
    <div>
      <TextField
        id="outlined-required"
        label="Your Name"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-required"
        label="Your Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="What would you like to ask or tell us..."
        multiline
        rows="4"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Send
      </Button>
    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.objectOf(String).isRequired,
};

export default withStyles(ContactFormStyle)(ContactForm);
