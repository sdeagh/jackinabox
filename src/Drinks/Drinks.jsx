import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Parallax from '../Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';


import drinksStyle from './DrinksStyle';
import BackgroundImage from '../assets/img/jackbox1.jpg';

const useStyles = makeStyles(drinksStyle);

function Drinks() {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter medium image={BackgroundImage} className={classes.back}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Typography variant="h6" gutterBottom paragraph className={classes.title}>
                We are very flexible and our choice of soft and alcoholic drinks is very wide.
              </Typography>
              <Typography variant="h6" gutterBottom className={classes.title}>
                We think you will love these...
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={`${classes.mainRaised}`}>
        <div className={classes.container}>
          <Grid container spacing={2} className={classes.gridContainer}>

            <Grid item md={12} sm={12} className={classes.gridItem}>
              <Paper className={classes.paper}>
                <div className={classes.logoTop} />
                <Typography variant="h5" className={classes.heading}>
                  Gin&apos;tastic&apos;
                </Typography>
                <div className={classes.logoBottom} />

                <Typography paragraph variant="body1">
                  All served with Fever-Tree or Schweppes Tonic
                </Typography>
                <Typography variant="h6">
                  Cambridge Dry
                </Typography>
                <Typography paragraph variant="caption">
                  Cambridge Distillery is a small distillery based in Cambridge, England and is owned and run by Will and Lucy Lowe. The distillery specializes in seasonal gins and tailored gins - custom made gins created for individuals and groups based on their personal tastes. However, the distillery has recently released its own flagship expression, Cambridge Dry Gin. This gin is made with eight botanicals: Macedonian juniper, blackcurrant leaf, basil, rosemary, lemon verbena, rose petals, violet petals, and angelica. Each botanical is infused and distilled individually with small batches of the spirit. The final product is then bottled at 42% ABV.
                </Typography>
                <Typography variant="h6">
                  Monkey 47
                </Typography>
                <Typography paragraph variant="caption">
                Hailing from Germany’s Black Forest, Monkey 47 is an exotic gin made with a molasses base. The 47 refers to the number of botanicals used which includes such unlikely fruit ingredients like lingonberries, blackberries, and honey pomelo. These are combined with a host of recognizable gin botanicals such as chamomile, sage, angelica, coriander, and a whole array of others. Another anomaly at Monkey 47 is that the distillate is aged in earthenware containers for three months before being brought to 47% ABV with the forest’s celebrated water.
                </Typography>
                <Typography variant="h6">
                  Bombay Sapphire
                </Typography>
                <Typography paragraph variant="caption">
                Bombay Sapphire was first introduced in 1987. The bottle's utterly recognizable blue bottle is now an icon and adorned with an image of Queen Victoria. The gin itself is comprised of 10 botanicals which include cubeb berries, almonds, licorice root, and grains of paradise. The botanicals are introduced into the neutral spirit by way of vapor distillation. The botanicals are placed in perforated copper baskets with the vapor of the distillate passing over them. Only water is added to bring down to proof, which for this bottling is 40% ABV.
                </Typography>
                <Typography variant="h6">
                  Pinkster
                </Typography>
                <Typography paragraph variant="caption">
                Launched in 2013, Pinkster Gin gets its lovely pale pink color from macerating raspberries into a finished gin. These and two additional botanicals are added post-distillation to a gin which is made to their standard with five botanicals at G & J Distillers.
                </Typography>
                <Typography variant="h6">
                  Blackdown Sussex
                </Typography>
                <Typography paragraph variant="caption">
                Made at the Blackdown Distillery in Sussex, this gin is the first to be made in Sussex. Released in 2012, the gin has a 100% British wheat neutral spirit base. Some of the botanicals used are licorice, cinnamon, nutmeg, and coriander. After distillation, Silver Birch sap is added from a source within 40 acres of the distillery itself. It is bottled at 37.5% ABV.                
                </Typography>
                <Typography variant="h6">
                Tanqueray No. 10
                </Typography>
                <Typography paragraph variant="caption">
                Released in 2000, Tanqueray No. TEN gin is named after the small copper pot-still ("Tiny Ten") that is used to produce the spirit. This Scottish gin uses a recipe which differs from the standard Tanqueray bottling. In addition to juniper, botanicals include coriander, chamomile flowers, white grapefruit, lime, and orange. Fun fact: The brand uses whole citrus fruits in its recipe.                
                </Typography>
                <Typography variant="h6">
                  Brighton
                </Typography>
                <Typography paragraph variant="caption">
                Brighton Gin is made with a 100 percent Organic wheat spirit - super smooth and without any of the nasties that can give you a sore and sorry head which we re-distil with juniper, fresh orange and lime peel, locally-grown coriander seed and milk thistle, which is indigenous to the South Downs and renowned for its kindness to the liver function. Top quality ingredients, attention to detail to make each bottle of Brighton Gin just perfect and our small batch production make Brighton Gin a premium product.
                </Typography>
                <Typography variant="h6">
                  Salcombe
                </Typography>
                <Typography paragraph variant="caption">
                Nestled amongst traditional boatbuilders on Island Street, Salcombe, at one of the world's only distilleries directly accessible by boat, Salcombe Distilling Co. creates exceptional handcrafted gin with an uncompromising approach to quality. Distilled and crafted in Salcombe, Devon, England on Provident, our bespoke 450 litre copper pot still, Salcombe Gin 'Start Point' is a citrus led classic London Dry Gin that is exceptionally smooth, distinct and complex. We use the finest Macedonian juniper, English coriander seeds, fresh Mediterranean citrus peels and eight further hand sourced botanicals from around the world, blended together with pure naturally soft Dartmoor water to create this perfectly balanced gin.
                </Typography>
                Sloe
                Warner&apos;s

              </Paper>
            </Grid>

            <Grid item md={12} sm={12} className={classes.gridItem}>
              <Paper className={classes.paper}>
                <div className={classes.logoTop} />

                <Typography variant="h5" className={classes.heading}>
              Tab Bar
                </Typography>
                <div className={classes.logoBottom} />

                <Typography variant="body1">
              You can put some money behind the bar and set up a tab.
              Once the tab is spent, the bar will revert to a cash bar,
              where your guests will pay for their own drinks.
                </Typography>
              </Paper>
            </Grid>

            <Grid item md={12} sm={12} className={classes.gridItem}>
              <Paper className={classes.paper}>
                <div className={classes.logoTop} />

                <Typography variant="h5" className={classes.heading}>
              Open Bar
                </Typography>
                <div className={classes.logoBottom} />

                <Typography variant="body1">
              You offer your guests free drinks and we send you a detailed invoice post-event.
                </Typography>
              </Paper>
            </Grid>

          </Grid>

        </div>
      </div>
    </div>
  );
}

export default Drinks;
