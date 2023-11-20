console.log("Hello!!")

async function harry() {
    const response = await fetch("https://api.github.com/users");
    // console.log(response);
    console.log("Beffore Response");
    const users = await response.json();
    // console.log(users)
    return users;
}

let fun = harry();
fun.then(data => console.log(data))
console.log(fun);