let Array = ['adrak', 'pyaz', 'Bhindi'];
//Add a key-value pair inside local storage
localStorage.setItem('Name', "Chinmay");
localStorage.setItem('Name2', 'Rohan');
localStorage.setItem('sabzi', JSON.stringify(Array));
//Clears the entire the local storage
// localStorage.clear();


//Retrieve an element
let name = localStorage.getItem("Name");
name = JSON.parse(localStorage.getItem('sabzi'));
console.log(name);