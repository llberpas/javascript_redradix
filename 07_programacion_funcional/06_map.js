function currify(fn) {
  return function aux(...args) {
    if (args.length >= fn.length)
      return fn(...args);
    else
      return (...more) => aux(...args, ...more);
  };
}

const map = currify((fn, list) => {
  const result = [];
  for (let el of list) {
    result.push(fn(el))
  }
  return result;
})

const suma = currify((a, b) => a + b);

const mapPlus100 = map(suma(100));
const mapPlus5 = map(suma(5));

console.log(mapPlus100([1, 2, 3])); // [101, 102, 103]
console.log(mapPlus5([1, 2, 3])); // [6, 7, 8]