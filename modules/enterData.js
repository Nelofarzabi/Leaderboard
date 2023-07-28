const urlPOST = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mwHLZWvmcAi40ernHtsJ/scores/';
const name = document.getElementById('inpIdName');
const score = document.getElementById('inpIdScore');
const submit = document.getElementById('submitBtn');

const enterData = () => {
  name.value = '';
  score.value = '';
  let gid = '';
  submit.addEventListener('click', async () => {
    if (name.value && score.value) {
      try {
        const response = await fetch(urlPOST, {
          method: 'POST',
          body: JSON.stringify({
            user: name.value,
            score: score.value,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        const data = await response.json();
        gid = data.result;
        name.value = '';
        score.value = '';
      } catch (error) {
        return error;
      }
    }
    return gid;
  });
};

export default enterData;
