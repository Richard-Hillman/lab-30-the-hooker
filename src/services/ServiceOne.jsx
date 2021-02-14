// findCharacters 
export const findVillagers = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json())
    .then((characters) =>
      characters.map((character) => (
        {
          image: character.image,
          name: character.name,
          id: character._id      
        }
      ))
    );
};



