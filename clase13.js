var man = {
  name: 'marco',
  lastName: 'tuzo',
  age: 28,
  height: 80
};

const INCREASE = .200

const SUBSTRACT = .200

const moreHeight = (person) => man.height += INCREASE

const lessHeight = (person) => man.height -= SUBSTRACT

const YEAR_DAYS = 265


console.log(`Al inicio del año ${man.name} pesaba ${man.height} kg`)

for (var i = 1; i <= YEAR_DAYS; i++) {
  var random = Math.random()

  if (random < .25) {
    moreHeight(man)
  } else if (random < .5) {
    lessHeight(man)
  }
}

console.log(`Al final del año ${man.name} pesa ${man.height.toFixed(2)} kg`)