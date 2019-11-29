const fetch = require('node-fetch');
const URL = 'https://swapi.co/api/people/'

let people = []

function getCharacter(n) {
  return fetch(URL + n)
    .then(res => res.json())
    .then(data => {
      people.push(data)
    })
}

getCharacter(1)
  .then(() => getCharacter(2))
  .then(() => getCharacter(3))
  .then(() => getCharacter(4))
  .then(() => getCharacter(5))
  .then(() => console.log(people.map(person => person.name)))
  .then(() => console.log(people.reduce((acc, x) => acc += parseInt(x.height), 0) / people.length))