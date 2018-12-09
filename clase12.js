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


const LEGAL_PERSON = 18


const legalPerson = ({ age }) => age >= LEGAL_PERSON

const getAccess = ({age}) => !legalPerson({ age }) ? console.log(`NO puede pasar`) : console.log(`Pase usted amable sujeto`)

getAccess(man)

