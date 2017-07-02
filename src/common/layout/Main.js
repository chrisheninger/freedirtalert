import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-fela';
import store from 'store2';
import Listings from '../pages/Listings';
import Cities from '../pages/Cities';
import cities from '../../data/cities';

import Header from './Header';
import Footer from './Footer';

const getCityFromLocation = location => {
  switch (location) {
    case '/': {
      const city = store.get('city') || 'phoenix';
      return {
        city,
      };
    }
    case '/cities': {
      return {
        city: null,
      };
    }
    default: {
      const city = location.split('/')[1];
      return {
        city: cities[city] ? city : '404',
      };
    }
  }
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = getCityFromLocation(props.location.pathname);
  }

  componentWillMount() {
    if (this.props.location.pathname) {
      const newState = getCityFromLocation(this.props.location.pathname);
      this.setState(() => newState);
      store.set('city', newState.city);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const newState = getCityFromLocation(nextProps.location.pathname);
      if (newState.city) {
        store.set('city', newState.city);
      }
      this.setState(() => newState);
    }
  }

  render() {
    const { styles } = this.props;
    const { city } = this.state;

    return (
      <div className={styles.root}>
        <Header city={city} />
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
