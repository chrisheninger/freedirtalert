import React, { Component } from 'react';
import FullscreenLoader from './FullscreenLoader';

class DynamicImporter extends Component {
  state = {
    mod: null,
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null,
    });
    props
      .load()
      .then(mod => {
        this.setState(() => ({
          mod: mod.default ? mod.default : mod,
        }));
      })
      .catch(err => {
        return <div>Something went wrong. {err}</div>;
      });
  }

  render() {
    if (!this.state.mod) {
      return <FullscreenLoader />;
    }

    return React.createElement(this.state.mod);
  }
}

export default DynamicImporter;
