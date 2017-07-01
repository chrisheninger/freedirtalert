import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-fela';
import Feed from '../pages/Feed';
import Cities from '../pages/Cities';
import mainStyles from './main-styles';

import Logo from '../Logo.js';
import HappyKitten from '../button/HappyKitten';

class Main extends Component {
  render() {
    const { styles } = this.props;

    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <Link to="/">
            <Logo />
          </Link>
          <div className={styles.tagline}>
            <span className={styles.text}>
              Free Dirt in{' '}
              <Link to="/cities" className={styles.city}>
                Phoenix
              </Link>
            </span>
            <Link to="/cities" className={styles.switch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z" />
              </svg>
            </Link>
          </div>
        </header>
        <Route exact path="/" component={Feed} />
        <Route path="/cities" component={Cities} />
        <footer className={styles.footer}>
          <h1 className={styles.heading}>About Free Dirt Alert</h1>
          <p className={styles.about}>
            Iusto delicata eu mei. Cu eos mazim choro albucius, ius quas congue
            dissentiet ad, quo te inermis accusam iudicabit. At nam solet
            blandit atomorum, scripta apeirian verterem ut vel. Ea summo
            menandri disputationi qui, cu nec percipit nominati, quo no liber
            omnium mnesarchum. Ei eam eius ceteros maluisset, nam oratio oblique
            omnesque at. At decore vocent consulatu eam, vis adhuc solum
            adipisci et, ubique tacimates reformidans nec cu.
          </p>
          <HappyKitten />
        </footer>
      </div>
    );
  }
}

export default connect(mainStyles)(Main);
