// villager
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import styles from './ComponentOne.css';


const Villager = ({ name, image, _id }) => {
  return ( 
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{_id}</p>
      </figcaption>
    </figure>
  );
};

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired, 
};

export default Villager;
