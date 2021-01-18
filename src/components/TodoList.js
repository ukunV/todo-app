/*
< TodoList >
todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서
여러 개의 TodoListitem 컴포넌트로 변환하여 보여 줍니다.
*/

import React from 'react';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.css';

const TodoList = ({ todos, onRemove, onToggle }) => {
	return (
		<div className="TodoList">
			{todos.map((todo) => (
				<TodoListItem
					todo={todo}
					key={todo.id}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
};

export default React.memo(TodoList);
/*
위의 React.memo는 현재 프로젝트 성능에 전혀 영향을 주지 않는다.
 왜냐하면, TodoList 컴포넌트의 부모 컴포넌트인 App 컴포넌트가 리렌더링 되는
 유일한 이유가 todos 배열이 업데이트될 때이기 때문이다.
 즉, 지금 TodoList 컴포넌트는 불필요한 리렌더링이 발생하지 않는다.
 */
