const urlGET = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mwHLZWvmcAi40ernHtsJ/scores/';

const sc = document.getElementById('sc');

const fetchData = () => {
  fetch(urlGET, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('From GET: Network response was not ok');
      }
      return response.json(); // This returns a Promise that resolves with the JSON data
    })
    .then((data) => {
      console.log(data);
      data.result.forEach((element) => {
        const tr = document.createElement('tr');

        const td2 = document.createElement('td');
        td2.textContent = element.user;
        tr.appendChild(td2);
        sc.appendChild(tr);

        const td = document.createElement('td');
        td.textContent = element.score;
        tr.appendChild(td);
        sc.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default fetchData;