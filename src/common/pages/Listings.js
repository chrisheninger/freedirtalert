import React, { Component } from 'react';
import { connect } from 'react-fela';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import Loader from '../layout/Loader';

const dynamicImport = city => import(`../../data/${city}.json`);

class Feed extends Component {
  state = {
    listings: null,
  };

  componentDidMount() {
    this.importListings(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.city !== nextProps.city) {
      this.importListings(nextProps.city);
    }
  }

  importListings = city => {
    this.setState(() => ({
      listings: null,
    }));

    dynamicImport(city)
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
  };

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
