console.log("Hello");

let ele = document.querySelector('.no');
ele = document.querySelector('.container');
console.log(ele);

let nodeType = ele.childNodes;
console.log(nodeType);
nodeName = ele.childNodes[1].nodeName;
console.log(nodeName);
nodeType = ele.childNodes[8]; //with childnodes i will get all the attributes ... so we have to use only children so that we will get only Elements.
console.log(nodeType);
//Node types
//1)element
//2)Attribute
//3)Textnode
//8)comment 
//9)document
//10)doctype
let container = document.querySelector("div.container")
console.log(container);
nodeType = ele.children;
console.log(nodeType);

//  console.log(container.children[1].children[0]);

console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.childElementCount);