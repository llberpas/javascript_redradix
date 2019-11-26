function partial(fn, ...args) {
  return (...moreArgs) => fn(...args, ...moreArgs)
}


const slowLog = partial(console.log, 'She said:');
slowLog('Hello!'); // She said: Hello!
slowLog(); // She said:

function suma(a, b) {
  return a + b;
}

const suma100 = partial(suma, 100);
console.log(suma100(2)); // 102

const suma5y2 = partial(suma, 5, 2);
console.log(suma5y2());