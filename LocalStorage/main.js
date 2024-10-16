//store data in a local storage
localStorage.setItem('name', 'Maria');
localStorage.setItem('age', 50);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');


//update data
localStorage.setItem('name', 'Karine');
name = localStorage.getItem('name');
localStorage.age = '35';
age = localStorage.getItem('age');
console.log(name, age);

//deleting data from local storage

localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log(name);

//clear data from local storage

localStorage.clear();
name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);