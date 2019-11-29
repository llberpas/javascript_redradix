const usuario = {
  nombre: 'Elias',
  apellido: 'Alonso',
  toString: function() {
    return `${this.nombre} ${this.apellido}`
  }
}

console.log(`Bienvenido, ${usuario}`)