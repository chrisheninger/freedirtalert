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
        <header className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.emoji} role="img" aria-label="free">
              🆓
            </span>
            <span className={styles.emoji} role="img" aria-label="dirt">
              🌎
            </span>
            <span className={styles.emoji} role="img" aria-label="alert">
              🚨
            </span>
          </div>
        </header>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default connect(mainStyles)(Main);
