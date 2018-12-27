const API_URI = 'https://swapi.co/api/'
const PEOPLE_URI = 'people/:id'

const OPTIO = { crossDomain: true }



function getCustome(id, callback) {
  const url = `${API_URI}${PEOPLE_URI.replace(':id', id)}`
  $.get( url, OPTIO, function(galaxyCustome) {
    console.log(`Hola, yo soy ${galaxyCustome.name} y soy el personaje numero ${id}`)

    if (callback) {
      callback()
    }
  }).fail(function() {
        console.log(`sucedio un error con el id ${id}`)
      })
}


getCustome(1, function() {
  getCustome(2, function() {
    getCustome(3, function() {
      getCustome(45)
    })
  })
})

