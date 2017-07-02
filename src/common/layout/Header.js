import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-fela';
import cities from '../../data/cities';
import Logo from './Logo.js';

const Header = ({ backTo, city, styles }) =>
  <header className={styles.root}>
    <Link to={backTo ? `/${city}` : '/cities'}>
      <Logo />
    </Link>
    <div className={styles.tagline}>
      <span className={styles.text}>
        {backTo ? `Back to ` : 'Free Dirt in '}
      </span>
      <Link to={backTo ? `/${city}` : '/cities'} className={styles.tagline}>
        <span className={styles.city}>
          {cities[city] || city}
        </span>
        <span className={styles.switch}>
          {backTo
            ? null
            : <svg
                title="Change cities"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#B0BDC6"
                  d="M22.087 45.71l-3.797-3.797L21.203 39 25 42.795z"
                />
                <path
                  fill="#DFE9EF"
                  d="M21.178 44.799L19.2 42.821l2.913-2.91 1.976 1.977z"
                />
                <path
                  fill="#B0BDC6"
                  d="M23.794 44.002l-3.796-3.797 1.206-1.206L25 42.796z"
                />
                <path
                  fill="#DFE9EF"
                  d="M22.465 41.535c9.045 9.046 23.705 9.044 32.752 0 9.043-9.044 9.045-23.708 0-32.752-9.045-9.044-23.709-9.045-32.752 0-9.044 9.045-9.044 23.709 0 32.752zm2.157-30.596c7.851-7.853 20.587-7.852 28.438 0 7.854 7.854 7.852 20.586 0 28.438-7.854 7.854-20.586 7.855-28.438 0-7.851-7.851-7.852-20.585 0-28.438z"
                />
                <path
                  fill="#B0BDC6"
                  d="M24.103 39.897c8.138 8.139 21.337 8.14 29.478 0 8.139-8.14 8.139-21.338 0-29.478-8.141-8.138-21.34-8.139-29.478 0-8.141 8.141-8.139 21.34 0 29.478zm1.091-28.385c7.534-7.537 19.757-7.536 27.292 0 7.539 7.538 7.537 19.757 0 27.293-7.537 7.537-19.756 7.539-27.292 0-7.536-7.535-7.537-19.757 0-27.293z"
                />
                <path
                  fill="#A6AEB0"
                  d="M27.935 29.778c6.517 6.518 17.079 6.518 23.595.003a16.593 16.593 0 0 0 3.787-5.879 16.637 16.637 0 0 1-4.811 13.349c-6.516 6.514-17.078 6.514-23.592 0-4.792-4.791-6.046-11.768-3.79-17.716a16.616 16.616 0 0 0 4.811 10.243z"
                  opacity=".3"
                />
                <path
                  fill="#333"
                  d="M10.401 60.54L3.46 53.598l13.76-13.76 6.942 6.942z"
                />
                <path
                  fill="#575B5E"
                  d="M8.828 58.966L5.032 55.17l13.761-13.757 3.796 3.797z"
                />
                <path
                  fill="#B0BDC6"
                  d="M2.101 52.938c-1.143 1.143 7.817 10.104 8.96 8.961l.701-.702c1.144-1.143-7.817-10.104-8.958-8.96l-.703.701z"
                />
                <path
                  fill="#DFE9EF"
                  d="M3.591 54.429c-1.145 1.143 4.836 7.123 5.979 5.979l.703-.702c1.142-1.143-4.838-7.121-5.979-5.979l-.703.702z"
                />
              </svg>}
        </span>
      </Link>
    </div>
  </header>;

export default connect({
  root: props => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '24px',
  }),
  tagline: props => ({
    display: 'flex',
    alignItems: 'center',
  }),
  text: props => ({
    fontSize: '20px',
    fontWeight: '700',
  }),
  city: props => ({
    fontSize: '24px',
    fontWeight: '700',
    color: props.theme.colors.gray700,
    borderBottom: `3px solid ${props.theme.colors.secondary}`,
    marginLeft: '6px',
  }),
  switch: props => ({
    display: 'flex',
    marginTop: '2px',
    marginLeft: '6px',
  }),
})(Header);
