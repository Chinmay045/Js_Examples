const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(name, email, phone);
name.addEventListener("blur", () => {
    console.log("Name is blurred");
    let regex = /^[a-zA-z]([0-9a-zA-Z]){1,10}/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("it is matched!!")
        name.classList.remove("is-invalid");

    }else{
        console.log("no match");
        name.classList.add("is-invalid");
    }
})

// console.log(name, email, phone);
email.addEventListener("blur", () => {
    console.log("email is blurred");
    let regex = /^[a-zA-z]([0-9a-zA-Z]){1,10}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("it is matched!!")
        email.classList.remove("is-invalid");

    }else{
        console.log("no match");
        email.classList.add("is-invalid");
    }
})

// console.log(name, email, phone);
phone.addEventListener("blur", () => {
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("it is matched!!")
        phone.classList.remove("is-invalid");

    }else{
        console.log("no match");
        phone.classList.add("is-invalid");
    }
})

