type CustomString = string;
type CustomNumber = number;
type CustomData = Data;
type CustomSymbol = Symbol;

let firstName: CustomString = "Mark";
let age: CustomNumber = 32;
let today: CustomData = new Data();
let unique: CustomSymbol = symbol();



function addNumbers(a: number , b: number) {
    return a+b;
}


let finalResult = addNumbers(10,20);
