var man = {
  name: 'marco',
  lastName: 'tuzo',
  age: 28,
  engineer: true,
  chef: false,
  singer: false,
  dj: false,
  guitarrist: false,
  drone: true
};


function printProfessions(man) {
  console.log(`${man.name} es:`)

  if (man.engineer === true) {
    console.log(`Engineer`)
  } else console.log(`No es`)

  if (man.chef === true) {
    console.log(`chef`)};

  if (man.drone === true) {
    console.log(`pilot`)};

  if (man.guitarrist === true) {
    console.log(`Engineer`)};
};

const LEGAL_AGE = 30;

function legalAge(man) {
  return man.age >= LEGAL_AGE
};


printProfessions(man)


function printLegalAge(man) {
  console.log(`${man.name} es:`)

  if (legalAge(man)) {
    console.log(`${man.name} mayor de edad`)
  } else {
    console.log(`${man.name} menor de edad`)
  }
}

printLegalAge(man)


