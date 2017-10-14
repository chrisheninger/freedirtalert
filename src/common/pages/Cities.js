import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-fela';
import cities from '../../cities';

const Cities = ({ styles }) => (
  <div className={styles.root}>
    <div className={styles.heading}>Choose a city</div>
    <div className={styles.cities}>
      {Object.keys(cities).map(city => {
        return (
          <div key={city}>
            <Link to={`/${city}`} className={styles.link}>
              {cities[city]}
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default connect({
  root: props => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '8px',
  }),
  heading: props => ({
    textAlign: 'center',
    fontSize: '14px',
  }),
  cities: props => ({
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
    margin: '8px',
  }),
})(Cities);
