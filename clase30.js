const API_URI = 'https://swapi.co/api/'
const PEOPLE_URI = 'people/:id'

const OPTIO = { crossDomain: true }



function getCustome(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URI}${PEOPLE_URI.replace(':id', id)}`
    $
      .get( url, OPTIO, function(data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`sucedio un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]

// var promises = ids.map(function(id) {
//   return getCustome(id)
// })
var promises = ids.map(id => getCustome(id))
Promise
  .all(promises)
  .then(customes => console.log(customes))
  .catch(onError)
// getCustome(1)
//   .then((custome) => {
//     console.log(`Hola, yo soy ${custome.name}`)
//     return getCustome(2)
//   })
//   .then(custome => {
//     console.log(`${custome.name} es mi nombre y soy el siguiente`)
//     return getCustome(3)
//   })
//   .then(custome => {
//     console.log(`te equivocas yo ${custome.name} soy el siguiente`)
//   })

//   .catch(onError)

