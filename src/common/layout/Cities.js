import React from 'react';
import { connect } from 'react-fela';
import homeStyles from './home-styles';

const Cities = ({ styles }) => <div className={styles.root}>Cities</div>;

export default connect(homeStyles)(Cities);
