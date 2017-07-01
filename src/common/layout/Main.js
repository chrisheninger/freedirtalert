import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-fela';
import Home from './Home';
import mainStyles from './main-styles';

import Logo from '../Logo.js';

class Main extends Component {
  render() {
    const { styles } = this.props;

    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <Logo />
        </header>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default connect(mainStyles)(Main);
