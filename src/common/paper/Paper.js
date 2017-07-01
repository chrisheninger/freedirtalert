import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-fela';
import classNames from 'classnames';
import paperStyles from './paper-styles';

import PaperBody from './PaperBody';
import PaperHeader from './PaperHeader';

function Paper({ children, className, styles }) {
  return (
    <div className={classNames(styles.root, className)}>
      {children}
    </div>
  );
}

Paper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object,
};

const mapStylesToProps = props => renderer => ({
  root: renderer.renderRule(paperStyles.root, props),
});

export { PaperBody, PaperHeader };
export default connect(mapStylesToProps)(Paper);
