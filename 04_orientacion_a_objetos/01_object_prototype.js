let c = Object.create({}, {
  uno: {value: 1}
});
let b = Object.create(c);
let a = Object.create(b);
console.log(a.uno);