function func(a, b) {
  console.log(this.num, a, b);
}

let obj = {
  callFunc: func
};

obj.callFunc.apply({num: 5}, [6, 7]);
obj.callFunc.call({num: 5}, 6, 7);
