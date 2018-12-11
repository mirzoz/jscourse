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

var people = [marco, gabi, sebastian, francia]

// const getHeightOnCms = person => {
//   return {
//     ...person,
//     height: person.height * 100
//   }
// }

const getHeightOnCms = person => (
  {
    ...person,
    height: person.height * 100
  }
)


var peopleCms = people.map(getHeightOnCms)


console.log(peopleCms)

