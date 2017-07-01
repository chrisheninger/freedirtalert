import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-fela';
import cities from '../../data/cities';

const Cities = ({ styles }) =>
  <div className={styles.root}>
    {Object.keys(cities).map(city => {
      return (
        <Link key={city} to={`/${city}`} className={styles.link}>
          {cities[city]}
        </Link>
      );
    })}
  </div>;

export default connect({
  root: props => ({
    flex: '1',
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  }),
  link: props => ({
    fontSize: '24px',
    fontWeight: '700',
    color: props.theme.colors.gray700,
    borderBottom: `3px solid ${props.theme.colors.secondary}`,
    marginBottom: '16px',
  }),
})(Cities);
