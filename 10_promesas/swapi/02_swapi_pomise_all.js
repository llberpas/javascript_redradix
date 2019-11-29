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

const p = Promise.all([
  getCharacter(1),
  getCharacter(2),
  getCharacter(3),
  getCharacter(4),
  getCharacter(5)
])


p
  .then(() => console.log(people.map(person => person.name)))
  .then(() => console.log(people.reduce((acc, x) => acc += parseInt(x.height), 0) / people.length))