const map = currify((arr, fn) => arr.reduce((acc, x) => acc.concat(fn(x)), []))

const filter = currify((arr, fn) => arr.reduce((acc, x) => fn(x) ? acc.concat(x) : acc, []))

const reduce = currify((combine, start, list) => {
  let current = start;
  for (let element of list)
    current = combine(current, element);
  return current;
});