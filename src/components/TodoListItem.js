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

const TodoListItem = () => {
	return (
		<div className="TodoListItem">
			<div className="checkbox">
				<MdCheckBoxOutlineBlank />
				<div className="text">할 일</div>
			</div>
			<div className="remove">
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
};

export default TodoListItem;
