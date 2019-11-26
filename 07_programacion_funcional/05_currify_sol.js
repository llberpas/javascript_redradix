function currify(fn) {
  return function aux(...args) {
    if (args.length >= fn.length)
      return fn(...args);
    else
      return (...more) => aux(...args, ...more);
  };
}

function suma(a, b) { return a + b; }
console.log("Currificar suma")
const csuma = currify(suma);
console.log("Ejecutar suma")
console.log("Resultado", csuma(1, 1)); // 2

const suma1 = csuma(1);
console.log("Ejecutar segunda suma")
console.log("Resultado", suma1(1)); // 2
console.log("Ejecutar tercera suma")
console.log("Resultado", csuma(1)(1)); // 2

// function suma4(a, b, c, d) { return a + b + c + d; }
//
// const rsuma4 = currify(suma4);
// rsuma4(1, 1, 1, 1); // 4
// rsuma4(1, 1, 1)(1); // 4
// rsuma4(1, 1)(1, 1); // 4
// rsuma4(1)(1, 1, 1); // 4
// rsuma4(1)(1)(1)(1); // 4