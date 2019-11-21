let obj = {}
let properties = {
  'x': {
    get: function () {
      return this._array[this._array.length - 1]
    },
    set: function (val) {
      this._array.push(val);
    }
  },
  '_array': {value: []}
};
Object.defineProperties(obj, properties);
obj.undo = function () {
  this._array.pop();
};
obj.x = 1;
obj.x = 2;
obj.x = 3;
obj.x = 4;
console.log(obj.x);
obj.undo();
console.log(obj.x);