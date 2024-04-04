console.log('test');
// string
// number
// boolean
// object
// any
// unknown
// Date
// Record<string, unknown>
// Partial
// Omit
// Peak


const nums: (number| string) [] = [1, 2, 3, 4, "five"];
const alphanums: Array<number | string> = ["one", 2, "three"]
  
console.log(nums);
console.log(alphanums);

// OBJECTS
const obj =  {
  id: 1,
  name: "Iza",
  age: 20
} satisfies Record<string|number , unknown>

// Two types of declaring TYPES

type Gender = "male" | 'female' | "other"
type Departments = "Admin" | "IT"

interface User {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  createdAt: Date;
  updatedAt: Date;
}

interface Officer extends User {
  role: string;
  department: Departments;
}

const person1: User = {
  name: "Jordan",
  age: 21,
  gender: "male",
  address: "Manila"
} as unknown as User // can be the last option

const person2 = {} as Officer;
// person1.
// person2.

type CreateUser = User;
type UpdateUser = Partial<Officer>


type Intruments = {
  class: "brass" | "wind" | "percussion";
  price: number
}
type Band = {
  name: string
} & Intruments;

const newIns = {} as Band;
// newIns. 
