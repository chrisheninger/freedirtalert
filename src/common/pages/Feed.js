import React from 'react';
import { connect } from 'react-fela';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import phoenix from '../../data/phoenix.json';

const CardContainer = ({ styles }) => {
  return (
    <div className={styles.root}>
      {phoenix.map((dirt, i) =>
        <Link
          className={styles.link}
          key={i}
          to={dirt.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card
            image={dirt.image || ''}
            title={dirt.title}
            location={dirt.location}
            date={dirt.date}
          />
        </Link>
      )}
    </div>
  );
};

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
    margin: '0 auto',
  }),
  link: props => ({
    margin: '8px',
  }),
})(CardContainer);
