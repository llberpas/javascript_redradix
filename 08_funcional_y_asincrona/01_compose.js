function compose(...fns) {
  const [head, ...tail] = fns.reverse()
  return (...args) => {
    return tail.reduce((acc, fn) => fn(acc), head(...args))
  }
}

const suma = (a, b) => a + b;
const half = x => x / 2;
console.log(compose(half, suma)(10, 2))
console.log(half(suma(10, 2)))