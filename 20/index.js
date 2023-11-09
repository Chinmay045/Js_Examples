let today = new Date();
console.log(today);
let otherDate = new Date('08-04-2023  04:54:08');
otherDate = new Date('June 13 1976');
otherDate.setDate(23);
otherDate.setHours(2);
otherDate.setMinutes(22);
otherDate.setSeconds(45);
console.log(otherDate);
let a = otherDate.getDay();

console.log(a);