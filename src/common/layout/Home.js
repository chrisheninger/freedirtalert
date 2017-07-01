import React from 'react';
import { connect } from 'react-fela';
import Card from '../card/Card';
import data from '../../data';

const CardContainer = ({ styles }) =>
  <div className={styles.root}>
    {data.map((dirt, i) =>
      <Card
        key={i}
        image={dirt.image}
        title={dirt.title}
        location={dirt.location}
        className={styles.card}
      />
    )}
  </div>;

export default connect({
  root: props => ({
    flex: '1',
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '-8px',
  }),
  card: props => ({
    margin: '8px',
  }),
})(CardContainer);
