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

// arrow functions luôn lấy context nói chung, hoặc gần nó nhất 

const button = document.querySelector('#btn');
console.dir(button);

button.addEventListener('click', () => {
    console.log(this)
});
button.addEventListener('click', function () {
    console.log(this)
}); // this ở đây sẽ lấy context thuộc về, gần nó nhất ở đây là button




import { sub } from "./module.js";

console.log(sub(3, 2));


// spread &  Rest
// spread ... 
const newObject = {
    name: 'Trong Vinh',
    address: {
        street: '372 Song Nhue'
    }
}

const newObject1 = {...newObject}

newObject1.name = 'Doan Trong Vinh'
newObject.address.street = '372 Bo Tay Song Nhue'
console.log(newObject)
console.log(newObject1)
// => 372 Song nhue bi thay doi vi su dung chung bo nho 


const arr2 = ['1', '2', '3', '4', '5', '6']
const arr3 = [...arr2]
arr3.push('7')
console.log(arr2)
console.log(arr3)

// => chỉ là shallow coppy ( coppy 1 tầng ) ko thể truy cập đc address