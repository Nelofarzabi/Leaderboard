const urlPOST = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mwHLZWvmcAi40ernHtsJ/scores/';
const name = document.getElementById('inpIdName');
const score = document.getElementById('inpIdScore');
const submit = document.getElementById('submitBtn');

let gid = [];

const enterData = () => {
  name.value = '';
  score.value = '';

  submit.addEventListener('click', () => {
    if (name.value && score.value) {
      fetch(urlPOST, {
        method: 'POST',
        body: JSON.stringify({
          user: name.value,
          score: score.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('From POST: Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          gid = data.result;
          console.log(gid);
          name.value = '';
          score.value = '';
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  });
};

export default enterData;
