/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import OneVillager from '../oneVillager/OneVillager';
import { Link } from 'react-router-dom';
// import styles from './ComponentOne.css';

const VillagersList = ({ villagers }) => {

  const villagerElements = villagers.map(villager => (
    <div key={villager._id}>
      <Link to={`/villagers/${villager._id}`}>
        <OneVillager {...villager} />
      </Link>
    </div>
  ));

  return ( 
    <ul> 
      {villagerElements}
    </ul>
  );
};

VillagersList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string
  }))
};

export default VillagersList;
