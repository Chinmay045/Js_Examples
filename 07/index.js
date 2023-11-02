console.log("hello");

let age = 19;

if (age == 19) {
    console.log("It is true");
}
else {
    console.log("It is false");
}

let doesdrive = true;
// let age =18
if (doesdrive && age > 18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let j = 0;
while (j <= 10) {
    console.log(j);
    j += 1;
} 


let obj = {
    name: "Chinnmay",
    class: "10",
    city:"Shivamogga"
}

for(let key in obj){
    console.log(obj);
}