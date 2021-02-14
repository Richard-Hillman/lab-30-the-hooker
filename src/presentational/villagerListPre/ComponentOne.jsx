/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Villager from '../villagerPre/ComponentTwo';
import { Link } from 'react-router-dom';
// import styles from './ComponentOne.css';

export default function VillagersList({ villagers = [] }) {
  console.log(villagers, 'fuck u');
  const villagerElements = villagers.map((villager) => (
    <Link key={villager._id} to = {`/containerTwo/${villager._id}`} >
      <li key={villager.name}>
        <Villager
          image={villager.image}
          name={villager.name}
        />
      </li>
    </Link> 
  ));

  return ( 
    <ul data-testId="villagers"> 
      {villagerElements}
    </ul>
  );

}

VillagersList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string
  }
  ))
};

