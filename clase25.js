const API_URLS = 'https://swapi.co/api/'
const PEOPLE_URLS = 'people/:id'

const OPTI = { crossDomain: true }
const ON_RESPONSES = function(galaxyCustome) {
  console.log(`Hola, yo soy ${galaxyCustome.name}`)
}


function getCustome(id) {
  const url = `${API_URLS}${PEOPLE_URLS.replace(':id', id)}`
  $.get( url, OPTI, ON_RESPONSES)
}


getCustome(20)
getCustome(2)
getCustome(40)