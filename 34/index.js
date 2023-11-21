console.log("Hello!!")

async function harry() {
    console.log("Inside Harry Function");
    const response = await fetch("https://api.github.com/users");
    console.log("Beffore Response");
    const users = await response.json();
    console.log("users resolved");
    return users;
}

console.log("Beffore calling Harry");
let fun = harry();
console.log("After calling Harry");
fun.then(data => console.log(data))
console.log(fun);