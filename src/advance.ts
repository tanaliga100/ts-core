console.log('ADVANCE');

// OMIT

type Person = {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  createdAt: Date;
  updatedAt: Date;
  
}

type CreatePerson = Partial<Person>; /*hindi required */
type UpdatePerson = Omit<Person, 'createdAt' | 'updatedAt'>; /*iseselect yung hindi kasama */
type ChangePerson = Pick<Person, 'createdAt' | 'updatedAt'>; /*iseselect yung hindi kasama */
const personOne: CreatePerson = {
  age: 21
}
const persontwo: UpdatePerson = {
  age: 21,
  gender: "female",
  name: "iza",
  id: '2131'
}
const personthree: ChangePerson = {
  createdAt: new Date(Date.now()),
  updatedAt: new Date(Date.now() + 100000)
}


const UserTypes  = {
  ADMIN: "admin",
  USER: "user"
} as const 

