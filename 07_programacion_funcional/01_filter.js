const arrayOfInts = (n) => {
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}

console.log(arrayOfInts(10).filter(x => x % 2 === 1))


const arrayOfObjects = (n) => {
  let result = []
  for (let i = 0; i < n; i++) {
    let object = {};
    object.id = i;
    if (i % 2 === 0) object.important = true
    result.push(object)
  }
  return result;
}

console.log(arrayOfObjects(10).filter(x => x.important))