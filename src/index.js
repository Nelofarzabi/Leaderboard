import './style.css';
import getdata from '../modules/getData.js';
import enterData from '../modules/enterData.js';

const ref = document.getElementById('refId');

ref.addEventListener('click', () => {
  window.location.reload();
});

getdata();
enterData();
