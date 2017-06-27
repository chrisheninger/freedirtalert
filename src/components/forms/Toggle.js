import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-fela';
import classNames from 'classnames';
import toggleStyles from './toggle-styles';

class Toggle extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    checkedIcon: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    uncheckedIcon: PropTypes.node.isRequired,
  };

  static defaultProps = {
    tabIndex: '0',
    type: 'text',
  };

  render() {
    const {
      className,
      checkedIcon,
      label,
      styles,
      tabIndex,
      uncheckedIcon,
      validation,
      ...passthroughProps
    } = this.props;

    return (
      <div className={classNames(styles.scaffold, className)}>
        <label
          className={styles.root}
          ref={l => { this.label = l; }}
          onKeyDown={e => {
            if (e.keyCode === 32) {
              e.preventDefault();
              this.label.click()
            }
          }}
          tabIndex={passthroughProps.disabled ? null : tabIndex}
        >
          <input {...passthroughProps} style={{ display: 'none' }} />
          <span className={styles.toggle}>
            {passthroughProps.checked ? checkedIcon : uncheckedIcon}
          </span>
          <span className={styles.label}>{label}</span>
        </label>
        {validation
          ? <div className={styles.validation}>{validation}</div>
          : null}
      </div>
    );
  }
}

const mapStylesToProps = props => renderer => ({
  scaffold: renderer.renderRule(toggleStyles.scaffold, props),
  toggle: renderer.renderRule(toggleStyles.toggle, props),
  root: renderer.renderRule(toggleStyles.root, props),
  label: renderer.renderRule(toggleStyles.label, props),
});

export default connect(mapStylesToProps)(Toggle);
