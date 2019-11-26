const arrayOfInts = (n) => {
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}

console.log(arrayOfInts(10).reduce((acc, x) => acc - x, 0))

console.log(arrayOfInts(10).reduce((acc, x) => acc + x, ''))

const arrayOfIntsWithNegative = (n) => {
  let result = []
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) result.push(i)
    else result.push(-i)
  }
  return result;
}

console.log(arrayOfIntsWithNegative(10).reduce((acc, x) => x > 0 ? acc + x : acc, 0))

console.log(arrayOfInts(10).reduce((acc, x) => x > acc ? x : acc, -Infinity))