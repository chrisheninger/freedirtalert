import React from 'react';
import { connect } from 'react-fela';
import HappyKitten from '../button/HappyKitten.js';

const Footer = ({ styles }) =>
  <footer className={styles.root}>
    <h1 className={styles.heading}>About Free Dirt Alert</h1>
    <p className={styles.about}>
      Iusto delicata eu mei. Cu eos mazim choro albucius, ius quas congue
      dissentiet ad, quo te inermis accusam iudicabit. At nam solet blandit
      atomorum, scripta apeirian verterem ut vel. Ea summo menandri disputationi
      qui, cu nec percipit nominati, quo no liber omnium mnesarchum. Ei eam eius
      ceteros maluisset, nam oratio oblique omnesque at. At decore vocent
      consulatu eam, vis adhuc solum adipisci et, ubique tacimates reformidans
      nec cu.
    </p>
    <HappyKitten />
  </footer>;

export default connect({
  root: props => ({
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `1px solid ${props.theme.colors.gray300}`,
    padding: '24px',
    margin: '24px auto',
  }),
  heading: props => ({
    fontSize: '24px',
    fontWeight: '500',
    marginTop: '12px',
  }),
  about: props => ({
    maxWidth: '560px',
    marginTop: '24px',
  }),
})(Footer);
