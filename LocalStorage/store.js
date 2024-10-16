const todos = [
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
];

//console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));
const stored = localStorage.getItem('todos');
console.log(stored);    
console.log(JSON.parse(stored));