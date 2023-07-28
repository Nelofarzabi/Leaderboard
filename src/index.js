import './style.css';

let gid = [];
const p = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'faisal',
  }),

  // Adding headers to the request
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

const data = p.JSON();
gid = (data.result).split('');
console.log(gid[2]);