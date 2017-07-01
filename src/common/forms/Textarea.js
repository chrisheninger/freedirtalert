import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-fela';
import classNames from 'classnames';
import inputStyles from './input-styles';

class Textarea extends PureComponent {
  render() {
    const {
      className,
      label,
      id,
      styles,
      validation,
      ...passthroughProps
    } = this.props;

    return (
      <div className={classNames(styles.scaffold, className)}>
        {label
          ? <label htmlFor={id} className={styles.label}>
              {label}
            </label>
          : null}
        <textarea
          id={id}
          className={classNames(styles.root, styles.textarea)}
          {...passthroughProps}
        />
        {validation
          ? <div className={styles.validation}>
              {validation}
            </div>
          : null}
      </div>
    );
  }
}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  value: PropTypes.string,
};

Textarea.defaultProps = {
  tabIndex: '0',
};

const mapStylesToProps = props => renderer => ({
  scaffold: renderer.renderRule(inputStyles.scaffold, props),
  label: renderer.renderRule(inputStyles.label, props),
  root: renderer.renderRule(inputStyles.root, props),
  textarea: renderer.renderRule(inputStyles.textarea, props),
});

export default connect(mapStylesToProps)(Textarea);
