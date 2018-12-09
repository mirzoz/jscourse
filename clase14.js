var man = {
  name: 'marco',
  lastName: 'tuzo',
  age: 28,
  height: 80
};

const TO_INCREASE = .300

const TO_SUBSTRACT = .300

const moreHeights = (person) => man.height += TO_INCREASE

const lessHeights = (person) => man.height -= TO_SUBSTRACT


console.log(`Al inicio del año ${man.name} pesaba ${man.height} kg`)

// for (var i = 1; i <= YEAR_DAYS; i++) {
//   var random = Math.random()

//   if (random < .25) {
//     moreHeight(man)
//   } else if (random < .5) {
//     lessHeight(man)
//   }
// }



const eatToMuch = () => Math.random() < .3

const makeSport = () => Math.random() > .4

const TO_LOSE = 3

var days = 0

const GOAL = man.height - TO_LOSE

while ( man.height >= GOAL ) {
  if ( eatToMuch() ) {
    moreHeights(man)
  }

  if ( makeSport() ) {
    lessHeights(man)
  }

  days += 1
}
console.log(`Al pasar de ${days} dias hasta que ${man.name} logro bajar 3kg y ahora pesa ${man.height.toFixed(2)} kg`)