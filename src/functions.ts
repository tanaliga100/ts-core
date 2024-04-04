console.log('FUNCTIONS');

type U = {
  name: string;
  age: number;
}
type P = {
  gender: "male" | "female"
} & U

function printUser(){
  return {
    name: 'Jordan',
    age: 21,
    gender: "male"
  } 
}
type GenUserRes =  ReturnType<typeof printUser>
const res = printUser()

console.log(res);

