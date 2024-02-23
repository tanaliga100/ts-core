"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
console.log("SALES", sales, is_published, course);
let level;
function render(document) {
    console.log(document);
}
render(123);
// ARRAY | can contain string, number, boolean, object
let numbers = [1, 2, 3];
numbers.forEach((n) => n.toString());
console.log(typeof numbers);
// TUPLES | Fixed Length
let user = [1, "Dan"];
let mySize = 101 /* Size.Medium */;
console.log(mySize);
// FUNCTIONS
function calculateTax(income, taxYear) {
    if (taxYear <= 1999) {
        return "not in the 20th century";
    }
    return "belongs to the 20th century  " + income;
}
console.log(calculateTax(0, 2022));
// OBJECTS
let emps = {
    id: 1,
    name: "dan",
    retire: () => {
        return new Date();
    },
};
console.log(emps.retire());
console.log(emps.id, emps.retire());
// UNION TYPES
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs("10"));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
// NULLABLE TYPES
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(100);
if (customer !== null && customer !== undefined) {
    console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
}
//# sourceMappingURL=index.js.map