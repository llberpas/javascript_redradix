function reclone(obj) {
  // Maybe if we create the new object with the name, we will have a correct clone.
  let result = {};
  Object.values(obj).forEach(element => {
    if (typeof element === 'object') {
      result = Object.assign({}, result, reclone(element));
    } else {
      result = Object.assign({}, result, element);
    }
  })
  return result;
}

const u1 = {username: "user1", password: "pass1"};
const u2 = {username: "user2", password: "pass2"};
const users = {"u1": u1, "u2": u2};

const usersCopy = Object.assign({}, users);
const realUserCopy = reclone(users);
console.log(u1);
realUserCopy.u1.username = "user3";
console.log(u1);