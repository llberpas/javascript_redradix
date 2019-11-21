function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(`Greetings ${this.name}, my fellow companion!`)
}

let user1 = new User('Peter');
user1.greet();