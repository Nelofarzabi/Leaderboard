const urlPOST = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const newGame = async () => {
  try {
    const response = await fetch(urlPOST, {
      method: 'POST',
      body: JSON.stringify({
        name: 'cool game',

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    if (!data) {
      throw new Error('From NewGame POST: Network response was not ok');
    }
    const gameId = data.result.split(' ');
    return gameId[3];
  } catch (error) {
    throw new Error('From NewGame POST: Network response was not ok');
  }
};

export default newGame;