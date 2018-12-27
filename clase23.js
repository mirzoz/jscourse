class Person{
  constructor(name, lastname, height) {
  this.name = name
  this.lastname = lastname
  this.height = height
  };

  salute(fn) {
    var { name, lastname } = this
    console.log(`Hola, me llamo ${name} ${lastname}`)
    if (fn) {
      fn(name, lastname)
    }
  }

  imTall() {
    this.height >= 1.70 ? console.log(`Soy una persona alta`) : console.log(`soy enana`)
  }
};

class Dev extends Person {
  constructor(name, lastname, height) {
  super(name, lastname, height)
  };

  salute(fn) {
    var { name, lastname } = this
    console.log( `Hola me llamo ${name} ${lastname} y soy developer`)
    if (fn) {
      fn(name, lastname, true)
    }
  }
};

var marco = new Person('Marco', 'tuzo', 1.90)
var gabi = new Person('Gabriela', 'Perez', 1.70)
var fran = new Dev('Francia', 'Massa', 1.5)




function respondSalute(name, lastname, isDev) {
  console.log(`Buen dia ${name} ${lastname}`)
  if (isDev) {
    console.log(`${name} veni, no sabia que vos eras Desarrollador`)
  }
}
marco.salute(respondSalute)
fran.salute(respondSalute)
gabi.salute()