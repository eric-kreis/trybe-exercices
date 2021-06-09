// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const jokeContainer = document.getElementById('jokeContainer');

  fetch(API_URL, { headers: { 'Accept': 'application/json' } })
    .then(response => response.json())
    .then(({ joke }) => jokeContainer.innerHTML = joke);
};

window.onload = () => fetchJoke();