function clone(obj) {
  return Object.assign({}, obj);
}

let obj = {a:1};
let objCloned = clone(obj);
console.log(obj, objCloned);
objCloned.a = 2;
console.log(obj, objCloned);