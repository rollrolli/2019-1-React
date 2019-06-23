import React, { useEffect, component } from 'react';
import TodoItem from './TodoItem';


const TodoItemList = ({todos, onToggle, onRemove}) => {
    // todos -> todo 객체들이 들어있는 배열
    // onToggle -> 체크박스를 켜고 끄는 함수
    // onRemove -> 아이템을 삭제시키는 함수

    const todolist = todos.map( ({id, text, checked}) => (
          <TodoItem
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
          />
        )
      );


    useEffect( () => {
        console.log("TodoItemList : todo list 업데이트 시에만 실행");
    }, [todos]);
    

    return (
        <div>
            {todolist}
        </div>
    );
};


export default TodoItemList;

