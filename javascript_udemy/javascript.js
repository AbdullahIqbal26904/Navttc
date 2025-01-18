console.log("this is my first code.ok");
const array = ['Monday',20,true];
const nums_arr = [1,2,3,4,5,6];
console.log(array);

const arr = new Array(5);
const arr2 = new Array();
const arr3 = new Array(12,'abc',true);

const array2 = Array.of(1,2,3,4);

const array3 = Array.of(1,2,3,4,'abc',true);


let num = nums_arr[4];
console.log('number is: '+num);

nums_arr.push(100);
console.log(nums_arr);
nums_arr.pop();//pops last element
nums_arr.shift();//pops firsst element

for(let i=0;i<10;i++){
    console.log(i);
}   
// for each loop
nums_arr.forEach(function(element,index,nums_arr){
    console.log(element);
})
// javascript objects
const book = {
    title: 'abc',
    author: 'efg',
    available: false,
    print:10
}
console.log(book.author)
//Using document.getelementbyid
console.log(document.getElementById("title"));
//use innerHTML to get only content
console.log("Using innerHTML:",document.getElementById("title").innerHTML);
//child vs children nodes.
const div1 = document.getElementById('parent');
console.log(div1.childNodes)
div1.childNodes.forEach((node) => console.log(node.nodeType))
console.log(div1.children)
