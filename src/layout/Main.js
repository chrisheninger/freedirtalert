import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-fela';
import Home from './Home';
import mainStyles from './main-styles';

class Main extends Component {
  render() {
    const { styles } = this.props;
    return (
      <div className={styles.root}>
        <h1 className={styles.logo}>
          <span role="img" aria-label="free">🆓</span>{' '}
          <span role="img" aria-label="dirt">🌎</span>{' '}
          <span role="img" aria-label="alert">🚨</span>
        </h1>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default connect(mainStyles)(Main);
