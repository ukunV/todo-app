/*
< TodoInsert >
새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다.
state를 통해 인풋의 상태를 관리합니다.
*/

import React from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.css';

const TodoInsert = () => {
	return (
		<form className="TodoInsert">
			<input placeholder="할 일을 입력하세요" />
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
};

export default TodoInsert;