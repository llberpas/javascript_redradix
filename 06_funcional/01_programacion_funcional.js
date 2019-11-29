// unless
// ================================================
function unless(test, block) {
  if (!test) block()
}

// repeat
// ================================================
function repeat(times, block) {
  for (let i = 0; i < times; i++) block()
}

repeat(2, () => {
  console.log('false')
})

// once
// ================================================
function once(fn) {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      return fn(...args)
    }
  }
}

const log = once(console.log);
log('Hello!', 'How are you?');
log('Goodbye!');

// throttle
// ================================================
function throttle(fn, ms) {
  let lastExecution = 0;
  return (...args) => {
    if ((Date.now() - lastExecution) > ms) {
      lastExecution = Date.now()
      return fn(...args)
    }
  }
}

const slowLog = throttle(console.log, 10);
slowLog('Hello!');
slowLog('Nop')

slowLog('Hello!');
setTimeout(() => slowLog('Bye!'), 11);

for (let i = 0; i < 100000; i++)
  slowLog(i);


// debounce
// ================================================
function debounce(fn, ms) {
  let id = 0;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), ms)
  }
}

const slowLog3 = debounce(console.log, 100);
// slowLog3('Hi in 100ms');

// slowLog3('Nop');
// slowLog3('Hi in 100ms');
//
// slowLog3('Nop');
// setTimeout(() => slowLog3('Hi in 110ms'), 10);
//
// slowLog3('Hi in 100ms');
// setTimeout(() => slowLog3('Hi in 201ms'), 101);
//
const slowLog4 = debounce(console.log, 10);
for (let i = 0; i < 100000; i++)
  slowLog4(i);