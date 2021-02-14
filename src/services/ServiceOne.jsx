const endpoint = 'https://ac-vill.herokuapp.com/villagers?perPage=397';

const findVillagers = () => {
  return fetch(endpoint).then((res) => res.json());
};

export default findVillagers;
