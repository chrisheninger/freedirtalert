import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-fela';
import cardStyles from './card-styles';

function Card({ children, location, styles, title }) {
  return (
    <div className={styles.root}>
      <div className={styles.image} />
      <div className={styles.content}>
        <div className={styles.title} title={title}>
          {title}
        </div>
        <div className={styles.location}>
          {location}
        </div>
      </div>
      {/* <div className={styles.actions}>
        <button className="mdc-button mdc-button--compact mdc-card__action">
          Action 1
        </button>
        <button className="mdc-button mdc-button--compact mdc-card__action">
          Action 2
        </button>
      </div> */}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
};

export default connect(cardStyles)(Card);
