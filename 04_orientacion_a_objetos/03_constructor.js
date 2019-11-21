function myNew(func, ...args) {
  let result = Object.create(func.prototype);
  func.apply(result, args)
  return result;
}

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} says: woof, woof!`)
}

let perro = myNew(Dog, "Toby");
perro.bark();