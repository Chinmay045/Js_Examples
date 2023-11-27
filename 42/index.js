const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(name, email, phone);
name.addEventListener("blur", () => {
    console.log("Name is blurred");
    let regex = /^[a-zA-z]([0-9a-zA-Z]){0,10}/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("it is matched!!")
    }
})

// console.log(name, email, phone);
email.addEventListener("blur", () => {
    console.log("email is blurred");
})

// console.log(name, email, phone);
phone.addEventListener("blur", () => {
    console.log("phone is blurred");
})

