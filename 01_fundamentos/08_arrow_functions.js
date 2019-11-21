function getAddFunction(x) {
  return y => x + y
}

const suma4 = getAddFunction(4);
console.log(suma4(5));