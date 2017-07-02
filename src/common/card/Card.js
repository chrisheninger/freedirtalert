import React from 'react';
import PropTypes from 'prop-types';
import timeago from 'timeago.js';
import { connect } from 'react-fela';
import cardStyles from './card-styles';

function Card({ children, className, date, location, styles, title }) {
  return (
    <div className={className ? className + ' ' + styles.root : styles.root}>
      <div className={styles.image} />
      <div className={styles.content}>
        <div className={styles.title} title={title}>
          {title}
        </div>
        <div className={styles.location}>
          {location}
        </div>
      </div>
      <div className={styles.actions}>
        Updated {timeago().format(date)}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  styles: PropTypes.object,
};

export default connect(cardStyles)(Card);
