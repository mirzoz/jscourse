class Person{
  constructor(name, lastname, height) {
  this.name = name
  this.lastname = lastname
  this.height = height
  };

  salute() {
    console.log(`Hola, me llamo ${this.name} ${this.lastname}`)
  }

  imTall() {
    this.height >= 1.70 ? console.log(`Soy una persona alta`) : console.log(`soy enana`)
  }
};


function person(name, lastname, height) {
  this.name = name
  this.lastname = lastname
  this.height = height
};


var marco = new person('Marco', 'tuzo', 1.90)
var gabi = new person('Gabriela', 'Perez', 1.70)
var fran = new person('Francia', 'Massa', 1.5)

class Dev extends Person {
  constructor(name, lastname, height) {
  super(name, lastname, height)
  };

  salute() {
    console.log( `Hola me llamo ${this.name} ${this.lastname} y soy developer`)
  }
};


