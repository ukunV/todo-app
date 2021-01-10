import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
	const array = [];
	for (let i = 1; i <= 2500; i++) {
		array.push({
			id: i,
			text: `할 일 ${i}`,
			checked: false,
		});
	}
	return array;
}

const App = () => {
	// const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);
	const [todos, setTodos] = useState([createBulkTodos]);

	// 고유값으로 사용될 id
	// ref를 사용하여 변수 담기
	const nextId = useRef(2501);

	const onInsert = useCallback(
		(text) => {
			const todo = {
				id: nextId.current,
				text,
				checked: false,
			};
			// (todos) =>: 함수형 업데이트
			setTodos((todos) => todos.concat(todo));
			nextId.current += 1; //nextId 1씩 더하기
		},
		[todos],
	);

	const onRemove = useCallback(
		(id) => {
			setTodos(todos.filter((todo) => todo.id !== id));
		},
		[todos],
	);

	const onToggle = useCallback(
		(id) => {
			setTodos(
				todos.map((todo) =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo,
				),
			);
		},
		[todos],
	);

	return (
		<TodoTemplate>
			{/* 이 안의 내용이 children */}
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
};

export default App;
