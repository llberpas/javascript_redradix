function applyContext(func, context) {
  return function (...args) {
    return func.apply(context, args);
  }
}

let contextFieldFunction = applyContext(function () {
  console.log(this.num)
}, {num: 10});

contextFieldFunction();