import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import galleryStyle from './GalleryStyle';
import BackgroundImage from '../assets/img/jackbox1.jpg';

const useStyles = makeStyles(galleryStyle);

function Gallery() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter medium image={BackgroundImage} className={classes.back}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                We have 3 packages available. Each package has an initial rental charge.
                Prices do depend on location and number of guests.
                You can choose the menu.
                We accept cash, contactless and card payments.
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

    </div>
  );
}

export default Gallery;
