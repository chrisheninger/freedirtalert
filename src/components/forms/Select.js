import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-fela';
import classNames from 'classnames';
import inputStyles from './input-styles';

class Select extends PureComponent {
  renderOptions(options) {
    let opts = options;
    if (opts.length && typeof opts[0] !== 'object') {
      opts = options.map(option => ({
        value: option,
        label: option,
      }));
    }
    return opts.map(opt => (
      <option value={opt.value} key={opt.value}>{opt.label}</option>
    ));
  }

  render() {
    const {
      className,
      label,
      id,
      options,
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
        <select
          id={id}
          className={classNames(styles.root, styles.select)}
          {...passthroughProps}
        >
          {this.renderOptions(options)}
        </select>
        {validation
          ? <div className={styles.validation}>{validation}</div>
          : null}
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

Select.defaultProps = {
  tabIndex: '0',
  type: 'text',
};

const mapStylesToProps = props => renderer => ({
  scaffold: renderer.renderRule(inputStyles.scaffold, props),
  label: renderer.renderRule(inputStyles.label, props),
  root: renderer.renderRule(inputStyles.root, props),
  select: renderer.renderRule(inputStyles.select, props),
});

export default connect(mapStylesToProps)(Select);
