const urlPOST = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const newGame = () => {
  fetch(urlPOST, {
    method: 'POST',
    body: JSON.stringify({
      name: 'cool game',

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('From NewGame POST: Network response was not ok');
      }
      return response.json(); // This returns a Promise that resolves with the JSON data
    })
    .then((data) => {
      const gameId = data.result.split(' ');
      return gameId[3];
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default newGame;