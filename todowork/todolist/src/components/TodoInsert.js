import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    //함수를 재사용
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value 값 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.이를 방지하기 위해
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    // onclick 말고 onsubmit에 할당한 이유는 enter를 눌렀을 때도 발생시키기 위해
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd size="11" />
      </button>
    </form>
  );
};

export default TodoInsert;
