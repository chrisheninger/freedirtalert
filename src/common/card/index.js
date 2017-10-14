import React from 'react';
import PropTypes from 'prop-types';
import timeago from 'timeago.js';
import { connect } from 'react-fela';

const Card = ({ children, className, date, location, styles, title }) => (
  <div className={className ? className + ' ' + styles.root : styles.root}>
    <div className={styles.image} />
    <div className={styles.content}>
      <div className={styles.title} title={title}>
        {title}
      </div>
      <div className={styles.location}>{location}</div>
    </div>
    <div className={styles.actions}>Posted {timeago().format(date)}</div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string.isRequired,
  className: PropTypes.node,
  location: PropTypes.string.isRequired,
  styles: PropTypes.object,
  title: PropTypes.string.isRequired,
};

export default connect({
  root: props => ({
    display: 'flex',
    flexDirection: 'column',
    width: '304px',
    height: 'auto',
    background: props.theme.colors.white,
    boxShadow: props.theme.globalBoxShadow,
    borderRadius: props.theme.globalBorderRadius,
    overflow: 'hidden',
  }),
  image: props => ({
    width: '100%',
    height: '180px',
    backgroundColor: props.theme.colors.primaryDark,
    backgroundImage: `url('${props.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }),
  content: props => ({
    paddingTop: '24px',
    paddingRight: '16px',
    paddingBottom: '16px',
    paddingLeft: '16px',
  }),
  title: props => ({
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '500',
    textTransform: 'capitalize',
    color: props.theme.typography.bodyColor,
    ...props.theme.typography.ellipsis,
  }),
  location: props => ({
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '400',
    textTransform: 'capitalize',
    color: props.theme.typography.bodyColor,
    ...props.theme.typography.ellipsis,
  }),
  actions: props => ({
    color: props.theme.colors.gray600,
    textAlign: 'right',
    paddingTop: '8px',
    paddingRight: '8px',
    paddingBottom: '8px',
    paddingLeft: '8px',
  }),
})(Card);
