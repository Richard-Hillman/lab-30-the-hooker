
import React from 'react';
import PropTypes from 'prop-types';

const OneVillager = ({ name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

OneVillager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default OneVillager;
