// we use the `in` operator. 

var person = {
	name: 'Nishant',
	age: 24
}


console.log('name' in person); //will print true
console.log(`salary` in person); //will print false

//! there is such a thing as OWN property vs INHERITED property
//! there are inhereted properties from classes/constructors/prototypes.
console.log('toString' in person); // Will print true

//to check if the key/property of an object is not inherited.
// use `hasOwnProperty`

console.log(person.hasOwnProperty('name'))// will print true
console.log(person.hasOwnProperty('toString')); // will print false