import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Waiter.scss';
import PropTypes from 'prop-types';


const Waiter = ({id = 20}) => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <Link to={'/order/new'}>Order new</Link>
    <Link to={`/order/${id}`}>Order id: {id}</Link>
  </div>
);

Waiter.propTypes = {
  id: PropTypes.string,
};

export default Waiter;
