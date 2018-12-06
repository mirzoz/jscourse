var man = {
  name: 'marco',
  lastName: 'tuzo',
  age: 28
};

var girl = {
  name: 'gabi',
  lastName: 'perez',
  age: 26
}



function printUppName(person) {
  var { name } = person
  console.log( name.toUpperCase()
    );
};

printUppName(man);
printUppName(girl);


function printSentences(person) {
  var { name } = person, { age } = person;
  console.log(` Hola, soy ${name} y tengo ${age} de edad`);
};

printSentences(man);
printSentences(girl);


function birthday(person) {
  return {
    ...person,
    age: person.age + 1
  }
  // var { age } = person
  // age += 1
}

birthday(man);