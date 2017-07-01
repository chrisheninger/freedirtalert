import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-fela';
import store from 'store2';
import Listings from '../pages/Listings';
import Cities from '../pages/Cities';
import cities from '../../data/cities';

import Header from './Header';
import Footer from './Footer';

const dynamicImport = city => import(`../../data/${city}.json`);

const getCityFromLocation = location => {
  switch (location) {
    case '/': {
      const city = store.get('city') || 'phoenix';
      return {
        city,
        data: dynamicImport(city),
      };
    }
    case '/cities': {
      return {
        city: 'choose a city below',
        data: null,
      };
    }
    default: {
      const city = location.split('/')[1];
      return {
        city,
        data: dynamicImport(city),
      };
    }
  }
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = getCityFromLocation(props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const newState = getCityFromLocation(nextProps.location.pathname);
      if (newState.city === 'choose a city below') {
        this.setState(() => newState);
      } else if (Object.keys(cities).indexOf(newState.city) > -1) {
        this.setState(() => newState);
        store.set('city', newState.city);
      }
    }
  }

  render() {
    const { styles } = this.props;
    const { city, data } = this.state;

    return (
      <div className={styles.root}>
        <Header city={city} />
        <Switch>
          <Route exact path="/" children={() => <Listings data={data} />} />
          <Route path="/cities" component={Cities} />
          <Route path="/:city" children={() => <Listings data={data} />} />
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
