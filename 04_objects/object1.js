// this is a simple javascript object

let person = {
  name: "cormac",
  age: 25,
  salary: 1000,
};

console.log(person);

person.age = 26;
console.log(person);

let name = "cormac";
let age = 25;

function increaseSalary(p) {
  p.salary *= 1.1;
}

increaseSalary(person);
console.log(person);

function raise(salary, percentage) {
  return salary + salary * percentage;
}

let newsalary = raise(person.salary, 0.1);
person.salary = newsalary;
console.log(person);

console.log(person["name"]);
person["salary"] = 2200;
console.log(person);

let employee = {
  person: person,
  date_of_hire: Date.now(),
};

console.log(employee);

list_of_employees = [];
list_of_employees[0] = employee;
console.log(`list_of_employees length=${list_of_employees.length}`);
console.log(list_of_employees[0]);
