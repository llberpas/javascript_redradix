let numbers = [1, 2, 3]

Object.defineProperty(numbers, 'average', {
  get: function () {
    let sum = 0;
    this.forEach(x => {
      sum += x;
    });
    return sum/this.length;
  }
});

console.log(numbers.average);