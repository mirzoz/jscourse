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

getCustome(1)
  .then(function(custome) {
    console.log(`Hola, yo soy ${custome.name}`)
  } )
  .catch(onError)

