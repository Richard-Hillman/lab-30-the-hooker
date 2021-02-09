import React, { useEffect, useState } from 'react';
import VillagersList from '../presentational/ComponentOne';
import { findVillagers } from '../services/ServiceOne';

const AllVillagers = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    findVillagers().then((villagers) => {
      setVillagers(villagers);
      setLoading(false);
    }); 
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <VillagersList villagers={villagers} />;
};

export default AllVillagers; 
