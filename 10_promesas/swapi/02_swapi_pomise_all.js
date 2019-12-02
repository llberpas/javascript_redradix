const fetch = require('node-fetch');
const URL = 'https://swapi.co/api/people/'

let URLs = []
for (let i = 1; i < 6; i++) {
  URLs.push(URL + i)
}

function getData(url) {
  return fetch(url).then(res => res.json())
}

const p = Promise.all(URLs.map(getData))

p.then((result) => {
  console.log(result.map(person => person.name))
  console.log(result.reduce((acc, x) => acc += parseInt(x.height), 0) / 5)
})