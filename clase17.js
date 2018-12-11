var marco = {
  name: 'marco',
  lastname: 'tuzo',
  height: 1.80
}

var gabi = {
  name: 'gabi',
  lastname: 'perez',
  height: 1.60
}

var sebastian = {
  name: 'sebastian',
  lastname: 'henao',
  height: 1.80
}

var francia = {
  name: 'favio',
  lastname: 'gonzales',
  height: 1.40
}

const tall = 1.8

const short = 1.5

const isTall = person => person.height >= tall


var people = [marco, gabi, sebastian, francia]

var tallPeople = people.filter(isTall)


people.forEach(person => {
  console.log(` ${person.name} mide ${person.height} mts`)
});

console.log(tallPeople)


const isShort = person => person.height <= short

var shortPeople = people.filter(isShort)

console.log(shortPeople)

const lastpe = 'perez'

const isPerez = person => person.lastname === lastpe

var perezPeople = people.filter(isPerez)

console.log(perezPeople)