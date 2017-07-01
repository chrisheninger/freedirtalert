import React, { Component } from 'react';
import { connect } from 'react-fela';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import Loader from '../layout/Loader';

class Feed extends Component {
  state = {
    listings: null,
  };

  componentWillMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.loadData(nextProps);
    }
  }

  loadData(props) {
    this.setState({
      listings: null,
    });
    props.data
      .then(listings => {
        this.setState(() => ({
          listings,
        }));
      })
      .catch(err => {
        return (
          <div>
            Something went wrong. {err}
          </div>
        );
      });
  }
  render() {
    const { styles } = this.props;
    const { listings } = this.state;

    if (!listings) {
      return <Loader />;
    }

    return (
      <div className={styles.root}>
        {listings.map((dirt, i) =>
          <Link
            className={styles.link}
            key={i}
            to={dirt.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              image={dirt.image || ''}
              title={dirt.title}
              location={dirt.location}
              date={dirt.date}
            />
          </Link>
        )}
      </div>
    );
  }
}

export default connect({
  root: props => ({
    flex: '1',
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '0 auto',
  }),
  link: props => ({
    margin: '8px',
  }),
})(Feed);
