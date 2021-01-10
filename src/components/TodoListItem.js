/*
< TodoListItem >
각 할 일 항목에 대한 정보를 보여 주는 컴포넌트입니다.
todo 객체를 props로 받아 와서 상태에 따른 다른 스타일의 UI를 보여 줍니다.
*/

import React from 'react';
import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from 'react-icons/md';
import '../styles/TodoListItem.css';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
	const { id, text, checked } = todo;

	return (
		<div className="TodoListItem">
			<div
				className="checkbox"
				checked={checked}
				id={checked ? 'line' : 'unline'}
				onClick={() => onToggle(id)}
			>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<div className="text">{text}</div>
			</div>
			<div className="remove" onClick={() => onRemove(id)}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
};

// React.memo(TodoListItem): TodoListItem 컴포넌트는 todo, onRemove, onToggle이 바뀌지 않으면 리렌더링을 하지 않는다.
export default React.memo(TodoListItem);
