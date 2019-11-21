function getMaxAndMin(...nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  return [min, max]
}

[min, max] = getMaxAndMin(1, 2, 3, 4, 5, 6, 7, -3);
console.log(min, max);