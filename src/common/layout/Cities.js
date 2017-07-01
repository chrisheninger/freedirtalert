import React from 'react';
import { connect } from 'react-fela';

const Cities = ({ styles }) => <div className={styles.root}>Cities</div>;

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
})(Cities);
