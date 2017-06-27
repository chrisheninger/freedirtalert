import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { combineRules } from 'fela';
import { connect } from 'react-fela';
import classNames from 'classnames';
import inputStyles from './input-styles';

class Input extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    tabIndex: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    tabIndex: '0',
    type: 'text',
  };

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
        <input id={id} className={styles.root} {...passthroughProps} />
        {validation
          ? <div className={styles.validation}>{validation}</div>
          : null}
      </div>
    );
  }
}

const mapStylesToProps = props => renderer => ({
  scaffold: renderer.renderRule(
    props.styles && props.styles.scaffold
      ? combineRules(inputStyles.scaffold, props.styles.scaffold)
      : inputStyles.scaffold,
    props
  ),
  label: renderer.renderRule(
    props.styles && props.styles.label
      ? combineRules(inputStyles.label, props.styles.label)
      : inputStyles.label,
    props
  ),
  root: renderer.renderRule(
    props.styles && props.styles.root
      ? combineRules(inputStyles.root, props.styles.root)
      : inputStyles.root,
    props
  ),
  validation: renderer.renderRule(
    props.styles && props.styles.validation
      ? combineRules(props.styles.validation, inputStyles.validation)
      : inputStyles.validation,
    props
  ),
});

export default connect(mapStylesToProps)(Input);
