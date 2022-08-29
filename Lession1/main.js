// var y = undefined; hanh dong truoc khi gan y = 7 

console.log(print);

// console.log(a) false => Cannot access 'a' before initialization

var x = 10;
var y = 7;
console.log(x, y);

// let/ const 
const a = 0;


// global variables, scope variables

if (true) {
    // let g = 0;
    console.log(y)
}

// console.log(g) // g is not defined

const ten = 10; // cannot reassign
const arr = [];
arr.push(1)
const obj = {};
obj.name = 'Vinh';

const obj1 = obj;
obj1.name = 'VinhDoan';


console.log(arr);
console.log(obj); //.name
console.log(obj1); //


// arrow functions
const printFunction = () => {
    console.log("In ra man hinh");
};

function print () {

}