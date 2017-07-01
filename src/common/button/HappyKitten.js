import React, { Component } from 'react';
import { connect } from 'react-fela';
import kittens from './kittens';

class Kitten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kitten: kittens[2],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.getRandomKitten();
    }
  }

  getRandomKitten = () => {
    const kitten = kittens[Math.floor(Math.random() * kittens.length)];
    this.setState(() => ({ kitten }));
  };

  render() {
    const { styles } = this.props;
    const { kitten } = this.state;
    return (
      <button className={styles.kitten} onClick={this.getRandomKitten}>
        {kitten}
      </button>
    );
  }
}

const mapStylesToProps = {
  kitten: props => ({
    textAlign: 'center',
    fontSize: '48px',
    lineHeight: '1',
    marginTop: '24px',
    padding: '16px',
  }),
};

export default connect(mapStylesToProps)(Kitten);
