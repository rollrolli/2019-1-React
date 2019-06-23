import React, { Component, useState, useCallback, useEffect, useRef } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


const App = () => {
  const id = useRef(2);
  const setId = (n) => {
    id.current = n;
  };
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { id: 0, text: ' 안녕', checked: false },
    { id: 1, text: ' 리액트', checked: true },
    { id: 2, text: ' 반가워', checked: false }
  ]);


  const onChange = useCallback((e) => {
      setText(e.target.value);
  }, []);
  const onCreate = useCallback((e) => {
      setId(id.current + 1);

      const nextTodos = todos.concat({
        id: id.current,
        text: text,
        checked: false
      });
      setTodos(nextTodos);
      setText('');
      document.getElementById("inputForm").value = "";
      document.getElementById("inputForm").focus();
  }, [text]);

  const onKeyPress = (e) => {
      if (e.key === 'Enter') {
          onCreate();
      }
  };
  const onToggle = useCallback((id) => {
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    setTodos(nextTodos);
  }, [id,todos]);

  const onRemove = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [id, todos]);

  return (
    <TodoListTemplate form = {<Form 
      value={text}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onCreate={onCreate}
    />}>
      <TodoItemList todos = {todos} 
      onToggle={onToggle}
      onRemove={onRemove} />
    </TodoListTemplate>
  );
};

export default App;