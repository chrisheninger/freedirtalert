import React from 'react';
import { connect } from 'react-fela';

function Button({ children, className, styles }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}

const mapStylesToProps = {
  button: props => ({
    textAlign: 'center',
    fontSize: '48px',
    lineHeight: '1',
    marginTop: '24px',
    padding: '16px',
  }),
};

export default connect(mapStylesToProps)(Button);
