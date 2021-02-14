import React, { useEffect, useState } from 'react';
import { findVillagerById } from '../../services/ServiceTwo';
import { useParams } from 'react-router-dom';
import Villager from '../../presentational/villagerPre/ComponentTwo';

const VillagerDetails = () => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    findVillagerById(_id).then((res) => {
      setVillager(res);
      setLoading(false);
    }); 
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <Villager name={villager.name} image={villager.image} />;

};

export default VillagerDetails;
