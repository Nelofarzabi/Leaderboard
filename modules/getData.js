const urlGET = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mwHLZWvmcAi40ernHtsJ/scores/';

const sc = document.getElementById('sc');

const fetchData = async () => {
  try {
    const response = await fetch(urlGET, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
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
  } catch (error) {
    return error;
  }
  return null;
};

export default fetchData;