function Animal(species, color) {
  this.species = species
  this.color = color
}
Animal.prototype = {
  toString: function() {
    return `Un ${this.species} de color ${this.color}`
  },
  getSpecies() {
    return this.species
  }
}
function Dog(color, name) {
  this.name = name
  Animal.call(this, 'perro', color)
}
Dog.prototype = Object.create(Animal.prototype) // objeto vacio para meter metodos Dog
Dog.prototype.toString = function(){
  return `Un ${this.species} de color ${this.color} que se llama ${this.name}`
}
var toby = new Dog('moteado', 'Toby');
console.log(toby.getSpecies()) // 'perro'
console.log(toby.toString()) // 'Un perro de color moteado que se llama Toby'