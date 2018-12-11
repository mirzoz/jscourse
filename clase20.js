function person(name, lastname, height) {
  this.name = name
  this.lastname = lastname
  this.height = height
};

person.prototype.salute = function () {
  console.log(`Hola, me llamo ${this.name} ${this.lastname}`)
}

person.prototype.imTall = function() {
  this.height >= 1.70 ? console.log(`Soy una persona alta`) : console.log(`soy enana`)
}

var marco = new person('Marco', 'tuzo', 1.90)
var gabi = new person('Gabriela', 'Perez', 1.70)
var fran = new person('Francia', 'Massa', 1.5)




marco.salute()

gabi.salute()

marco.imTall()

gabi.imTall()

fran.imTall()