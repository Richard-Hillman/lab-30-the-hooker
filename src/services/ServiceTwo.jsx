// findCharacters 
export const findVillagerById = (_id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`)
    .then((res) => res.json());
};
      
  
  
