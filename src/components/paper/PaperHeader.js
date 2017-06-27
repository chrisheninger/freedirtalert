import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-fela';
import classNames from 'classnames';
import paperStyles from './paper-styles';

function PaperHeader({ actions, className, styles, title }) {
  return (
    <div className={classNames(styles.header, className)}>
      <h2 className={styles.title}>
        {title}
      </h2>
      {actions
        ? <div className={styles.actions}>
            {actions}
          </div>
        : null}
    </div>
  );
}

PaperHeader.propTypes = {
  actions: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

const mapStylesToProps = props => renderer => ({
  header: renderer.renderRule(paperStyles.header, props),
  title: renderer.renderRule(paperStyles.title, props),
  actions: renderer.renderRule(paperStyles.actions, props),
});

export default connect(mapStylesToProps)(PaperHeader);
