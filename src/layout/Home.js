import React from 'react';
import { connect } from 'react-fela';
import data from '../data';
import homeStyles from './home-styles';

const Home = ({ styles }) =>
  <div className={styles.root}>
    {data.map((dirt, i) =>
      <div key={i} className={styles.card}>
        <img src={dirt.image} alt={dirt.title} />
        <div className={styles.cardTitle}>{dirt.title}</div>
        <div>{dirt.location}</div>
      </div>
    )}
  </div>;

export default connect(homeStyles)(Home);
