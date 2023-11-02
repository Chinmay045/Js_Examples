console.log("hello");

const marks = [34, 23, 24, 93, 73, 25];
const fruits = ['orange', 'Apple', 'PineApple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');
console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(arr.length);
console.log(Array.isArray("mixd"));

let value = marks.indexOf(24);
console.log(value);

marks.push(33);
console.log(marks);

marks.shift();
console.log(marks);

marks.unshift(2);
console.log(marks);

marks.splice(2,3);
console.log(marks);