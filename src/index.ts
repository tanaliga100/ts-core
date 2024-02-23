let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;
console.log("SALES", sales, is_published, course);
let level;

function render(document: unknown) {
  console.log(document);
}

render(123);

// ARRAY | can contain string, number, boolean, object
let numbers: number[] = [1, 2, 3];
numbers.forEach((n) => n.toString());
console.log(typeof numbers);

// TUPLES | Fixed Length
let user: [number, string] = [1, "Dan"];

// ENUMS are constants | Pascalcase
const enum Size {
  Small = 100,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// FUNCTIONS
function calculateTax(income: number, taxYear: number): string | number {
  if (taxYear <= 1999) {
    return "not in the 20th century";
  }
  return "belongs to the 20th century  " + income;
}
console.log(calculateTax(0, 2022));

// OBJECTS
let emps: Employee = {
  id: 1,
  name: "dan",
  retire: () => {
    return new Date();
  },
};
console.log(emps.retire());

// ADVANCE TYPES

// TYPE ALIASES
type Employee = {
  id: number;
  name: string;
  retire: () => void;
};

console.log(emps.id, emps.retire());

// UNION TYPES
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs("10"));

// INTERSECTION TYPES

type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// LITERAL TYPES
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = "cm" | "inch";

// NULLABLE TYPES
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}
greet(null);

// OPTIONAL CHAINING
type Customer = {
  birthday: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(100);
if (customer !== null && customer !== undefined) {
  console.log(customer?.birthday.getFullYear());
}
