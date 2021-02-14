// villager
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import styles from './ComponentOne.css';


const Villager = ({ name, japaneseName, image, quote }) => {
  return ( 
    <figure data-testId>
      <img src={image} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{japaneseName}</p>
        <p>{quote}</p>
      </figcaption>
    </figure>
  );
};

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Villager;
