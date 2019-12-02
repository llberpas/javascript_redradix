const fetch = require('node-fetch');
const URL = 'https://swapi.co/api/people/'

let people = []

function storeCharacterData(n) {
  return fetch(URL + n)
    .then(res => res.json())
    .then(data => {
      people.push(data)
    })
}

storeCharacterData(1)
  .then(() => storeCharacterData(2))
  .then(() => storeCharacterData(3))
  .then(() => storeCharacterData(4))
  .then(() => storeCharacterData(5))
  .then(() => console.log(people.map(person => person.name)))
  .then(() => console.log(people.reduce((acc, x) => acc += parseInt(x.height), 0) / people.length))