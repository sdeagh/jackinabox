import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';

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
          height: 400,
          color: 'white',
        }}
      />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withStyles(AppStyle)(App);
