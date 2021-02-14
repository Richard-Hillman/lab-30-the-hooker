/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Villager from '../villagerPre/ComponentTwo';
import { Link } from 'react-router-dom';
// import styles from './ComponentOne.css';

const VillagersList = ({ villagers }) => {
  const villagerElements = villagers.map((villager) => (
    <Link key={villager._id} to = {`/containerTwo/${villager._id}`} >
      <li key={villager.name}>
        <Villager
          image={villager.image}
          name={villager.name}
          quote={villager.quote}
        />
      </li>
    </Link> 
  ));

  return ( 
    <ul data-testId="villagers"> 
      {villagerElements}
    </ul>
  );

};

VillagersList.propTypes = {
  villagers: PropTypes.array.isRequired,
};

export default VillagersList;
