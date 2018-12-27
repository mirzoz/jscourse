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


async function getCustomes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promises = ids.map(id => getCustome(id))
  try {
    var customes = await Promise.all(promises)
    console.log(customes)
  } catch(id) {
    onError(id)
  }
}


getCustomes()
