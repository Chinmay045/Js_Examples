console.log("Hello")

try {
    console.log("WE are Inside try  block");

    functionAdina()
}
catch (err) {
    console.log(err);
}finally{
console.log("Finally we will run this");
}


let a = "Harry Bhai";
a = undefined;
if(a == undefined){
    throw new Error("this is not undefined");
}else{
    console.log("This is undefined");
}