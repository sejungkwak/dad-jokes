const jokeArea = document.getElementById('joke');
const button = document.getElementById('button');

getJoke()
button.addEventListener('click', getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
  .then(res => res.json())
  .then(jokes => jokeArea.textContent = jokes.joke)
  .catch(err => console.log(err))
}