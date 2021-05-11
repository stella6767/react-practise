import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames'; //classnames사용 명시

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  // 구조분할 할당
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      {/* checked가 true 일 때, 'checkbox'checked'  false면 checkbox*/}
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>

      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
