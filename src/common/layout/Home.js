import React from 'react';
import { connect } from 'react-fela';
import Card from '../card/Card';
import data from '../../data';
import homeStyles from './home-styles';

const Home = ({ styles }) =>
  <div className={styles.root}>
    {data.map((dirt, i) =>
      <Card
        key={i}
        className={styles.card}
        image={dirt.image}
        title={dirt.title}
        location={dirt.location}
      />
    )}
  </div>;

export default connect(homeStyles)(Home);
