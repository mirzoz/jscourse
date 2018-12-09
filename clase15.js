var counter = 0

const raining = () => Math.random() < .25

do {
  counter++
} while (!raining())

console.log(`Fui a ver si llovia ${counter} ${counter > 1 ? 'veces' : 'vez'}`)