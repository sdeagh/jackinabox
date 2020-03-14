import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import ImageGallery from 'react-image-gallery';

import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import galleryStyle from './GalleryStyle';
import BackgroundImage from '../assets/img/jackbox1.jpeg';

import images from './images';

import 'react-image-gallery/styles/css/image-gallery.css';

const useStyles = makeStyles(galleryStyle);

function Gallery() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter medium image={BackgroundImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Some recent snaps of the bar in action...
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.mainRaised}>
        <div className={classes.container}>
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
