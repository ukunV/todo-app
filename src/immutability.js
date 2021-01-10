const todos = [
	{ id: 1, checked: true },
	{ id: 2, checked: false },
];
const nextTodos = [...todos];

nextTodos[0].checked = false;
console.log(nextTodos[0].checked);
console.log(todos[0] === nextTodos[0]);

nextTodos[0] = {
	...nextTodos[0],
	checked: false,
};

console.log(nextTodos[0]);
console.log(todos[0] === nextTodos[0]);
