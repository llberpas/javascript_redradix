function memoize(fn) {
  let cache = {}
  return (value) => {
    if (cache.value === undefined) cache.value = fn(value)
    return cache.value;
  }
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

const ffib = memoize(fib);

console.time('first time');
ffib(40);
console.timeEnd('first time');

console.time('second time');
ffib(40);
console.timeEnd('second time');