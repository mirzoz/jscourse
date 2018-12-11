var marco = {
  name: 'marco',
  lastname: 'tuzo',
  height: 1.80,
  readedBooks: 90
}

var gabi = {
  name: 'gabi',
  lastname: 'perez',
  height: 1.60,
  readedBooks: 100
}

var sebastian = {
  name: 'sebastian',
  lastname: 'henao',
  height: 1.80,
  readedBooks: 30
}

var francia = {
  name: 'favio',
  lastname: 'gonzales',
  height: 1.40,
  readedBooks: 200
}

var people = [marco, gabi, sebastian, francia]

var reducer = (acum, person) => acum + person.readedBooks


var totalBooks = people.reduce(reducer, 0)

console.log(`Se han leido ${totalBooks} libros`)