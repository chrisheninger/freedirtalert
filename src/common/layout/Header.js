import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-fela';
import cities from '../../data/cities';
import Logo from './Logo.js';

const Header = ({ city, styles }) =>
  <header className={styles.root}>
    <Link to="/cities">
      <Logo />
    </Link>
    <div className={styles.tagline}>
      <span className={styles.text}>
        Free Dirt in{' '}
        <Link to="/cities" className={styles.city}>
          {cities[city] || city}
        </Link>
      </span>
      <Link to="/cities" className={styles.switch}>
        <svg
          title="Change cities"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z" />
        </svg>
      </Link>
    </div>
  </header>;

export default connect({
  root: props => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24px',
  }),
  tagline: props => ({
    display: 'flex',
    alignItems: 'center',
  }),
  text: props => ({
    fontSize: '24px',
    fontWeight: '700',
  }),
  city: props => ({
    color: props.theme.colors.gray700,
    borderBottom: `3px solid ${props.theme.colors.secondary}`,
  }),
  switch: props => ({
    display: 'flex',
    padding: '2px',
    marginTop: '4px',
    marginLeft: '6px',
    fill: props.theme.colors.secondary,
  }),
})(Header);
