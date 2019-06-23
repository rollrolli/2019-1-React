import React, { useEffect } from 'react';
import './TodoList.css';

const TodoItem = React.memo(({ id, text, checked, onRemove, onToggle }) => {
  return (
  
      <div className="todo-item">
        <div className="remove" onClick={() => onRemove(id)}>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`} 
          onClick={()=>onToggle(id)}>
          <div>{text}</div>
      </div>
      { checked && (<div className="check-mark">✓</div>) }
      </div>
    
  );

});

const TodoItems = React.memo(({ todos, onRemove, onToggle }) => {
  return todos.map(todo => (
      <TodoItem
        key={todo.get('id')}
        id={todo.get('id')}
        text={todo.get('text')}
        checked={todo.get('checked')}
        onToggle={()=>onToggle(todo.get('id'))}
        onRemove={()=>onRemove(todo.get('id'))}
      />
  ));
});

const TodoList = ({
  input,
  todos, 
  onChange,
  onToggle, 
  onSubmit,
  onRemove
  }) => {

    useEffect( () => {
        console.log("TodoList : todos 업데이트 시에만 실행");
    }, [todos]);
    
    return (

      <main className = "todo-list-template">
        <div className="title">
            오늘 할 일
        </div>
        <section className="form-wrapper">
          <form onSubmit={onSubmit}>
              <input
                value={input}
                onChange={onChange} />
              <button className="create-button">
                추가
              </button>
          </form>
        </section>
        <section className="todos-wrapper">
            <ul>
              <TodoItems
                todos={todos}
                onRemove={onRemove}
                onToggle={onToggle}
              />
            </ul>
        </section>
      </main>
    );
};


export default TodoList;

