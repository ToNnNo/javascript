import { foo, data, month, bar, baz as quux } from "./utils.js";
// import { foo as useless_foo, bar as useless_bar } from "./useless.js";
import * as useless from "./useless.js";
import { User } from "./User.js";
import Company from "./Company.js"; // export default
import { Employe } from "./Company.js";

console.log( foo() );
console.log(data);

for(let value of month){
    console.log(value);
}

console.log( bar(), quux());

console.log( useless.foo(), useless.bar() );

let user = new User("John Doe");

console.log( `Hello ${user.name}` );

let company = new Company('Agence tous risques');
let agent = new Employe('Mr T');
