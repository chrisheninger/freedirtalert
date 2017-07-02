import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-fela';
import store from 'store2';
import Listings from '../pages/Listings';
import Cities from '../pages/Cities';
import cities from '../../data/cities';

import Header from './Header';
import Footer from './Footer';

const getCityFromLocation = pathname => {
  if (cities[pathname]) {
    store.set('city', pathname);
    return {
      city: pathname,
    };
  }

  return {
    city: store.get('city') || 'phoenix',
  };
};

class Main extends Component {
  componentWillMount() {
    if (this.props.location.pathname) {
      const newState = getCityFromLocation(
        this.props.location.pathname.split('/')[1]
      );
      this.setState(() => newState);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const newState = getCityFromLocation(
        nextProps.location.pathname.split('/')[1]
      );
      this.setState(() => newState);
    }
  }

  render() {
    const { location, styles } = this.props;
    const { city } = this.state;

    return (
      <div className={styles.root}>
        <Header city={city} backTo={location.pathname === '/cities'} />
        <Switch>
          <Route exact path="/">
            <Listings city={city} />
          </Route>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/:city">
            <Listings city={city} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect({
    root: props => ({
      width: '100%',
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      margin: '16px auto',
    }),
  })(Main)
);
