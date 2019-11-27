function compose(...fns) {
  const [head, ...tail] = fns.reverse()
  return (...args) => {
    return tail.reduce((acc, fn) => fn(acc), head(...args))
  }
}

function range(start, end) {
  const list = [];
  for (let i = start; i <= end; i++)
    list.push(i);
  return list;
}

function mult3(n) {
  return n % 3 === 0;
}

function mult5(n) {
  return n % 5 === 0;
}

function and(pred1, pred2) {
  return n => pred1(n) && pred2(n);
}

function replaceWhen(pred, replacement) {
  return value => pred(value) ? replacement : value;
}

const fizzbuzz = compose(
  replaceWhen(mult3, 'fizz'),
  replaceWhen(mult5, 'buzz'),
  replaceWhen(and(mult3, mult5), 'fizzbuzz')
)

console.log(range(1, 15).map(fizzbuzz))