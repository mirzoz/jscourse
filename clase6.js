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



function printUppName({name}) {
  console.log( name.toUpperCase()
    );
};

printUppName(man);
printUppName(girl);
