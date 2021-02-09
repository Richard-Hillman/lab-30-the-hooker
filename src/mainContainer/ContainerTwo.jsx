import React, { useEffect, useState } from 'react';
import Villager from '../presentational/ComponentTwo';
import { findVillagerById } from '../services/ServiceTwo';

const VillagerDetails = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState([]);

  useEffect(() => {
    findVillagerById(match.params.id).then((villager) => {
      setVillager(villager);
      setLoading(false);
    }); 
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <Villager {...villager} />;
};

export default VillagerDetails; 
