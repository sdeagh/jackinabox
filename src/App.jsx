import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import Contact from './Contact/Contact';
import About from './About/About';
import Packages from './Packages/Packages';
import Drinks from './Drinks/Drinks';
import Gallery from './Gallery/Gallery';

import AppStyle from './AppStyle';

function App() {
  return (
    <div className="App">
      <Header
        color="transparent"
        brand="Jack In A Box"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'dark',
        }}
      />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/packages" component={Packages} />
        <Route path="/drinks" component={Drinks} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}


export default withStyles(AppStyle)(App);
