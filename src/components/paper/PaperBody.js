import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-fela';
import classNames from 'classnames';
import paperStyles from './paper-styles';

function PaperBody({ children, className, styles }) {
  return (
    <div className={classNames(styles.body, className)}>
      {children}
    </div>
  );
}

PaperBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object,
};

const mapStylesToProps = props => renderer => ({
  body: renderer.renderRule(paperStyles.body, props),
});

export default connect(mapStylesToProps)(PaperBody);
