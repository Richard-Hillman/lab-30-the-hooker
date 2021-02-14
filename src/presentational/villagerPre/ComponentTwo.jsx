// villager
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import styles from './ComponentOne.css';

const Villager = ({ name, image }) => (
  <figure data-testid="villager">
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
    </figcaption>
  </figure>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Villager;
