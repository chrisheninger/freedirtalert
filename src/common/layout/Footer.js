import React from 'react';
import { connect } from 'react-fela';
import cities from '../../data/cities';
import HappyKitten from '../button/HappyKitten.js';

const Footer = ({ city, styles }) => (
  <footer className={styles.root}>
    <h1 className={styles.heading}>About Free Dirt Alert</h1>
    <p className={styles.about}>
      Are you tired of having a difficult time finding fill dirt in{' '}
      {cities[city] || city}? Look no further! FreeDirtAlert.com is your
      one-stop-shop for finding free clean dirt and top soil around{' '}
      {cities[city] || city}. Looking for a place to dump fill dirt in{' '}
      {cities[city] || city}? You can probably find that on this site too. The
      possibilities!
    </p>
    <HappyKitten />
  </footer>
);

export default connect({
  root: props => ({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `1px solid ${props.theme.colors.gray300}`,
    padding: '24px',
    margin: '24px auto',
  }),
  heading: props => ({
    fontSize: '24px',
    fontWeight: '500',
    marginTop: '12px',
  }),
  about: props => ({
    lineHeight: '1.4',
    maxWidth: '560px',
    marginTop: '24px',
  }),
})(Footer);
