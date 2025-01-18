//Select a list item using data attribute
const selecteditem = document.querySelector('[data-item="fruit"]');
// console.log(selecteditem);
const parent = selecteditem.parentNode;
// console.log(parent);

//Using childNodes 1. access first child , 2nd and so on
const parentElt = document.getElementById('outerDiv');
// console.log(parentElt);
const childElt1 = parentElt.childNodes[0];
const childElt2 = parentElt.childNodes[1];
console.log(childElt1);
console.log(childElt2);
const childKaChild = childElt2.childNodes[1];
console.log(childKaChild);

