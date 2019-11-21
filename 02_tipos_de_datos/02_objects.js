function addObj(obj) {
  let result = 0;
  Object.values(obj).forEach(element => {
    if (typeof element === 'object') {
      result += addObj(element);
    } else {
      result += element;
    }
  });
  return result;
}

let obj = {a: 1, b: {c: 2, d: 5, e: {f: 9, g: 6}}};
console.log(addObj(obj));