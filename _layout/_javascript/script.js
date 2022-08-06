'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const jokeBtn = document.querySelector('.jokeBtn');
const jokeContainer = document.querySelector('.joke');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com/', config)
    .then(response => response.json())
    .then(data => {
      jokeContainer.innerHTML = data.joke;
    });
}
