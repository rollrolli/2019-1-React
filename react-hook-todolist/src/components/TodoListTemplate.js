import React, { useEffect } from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    
    useEffect(() => {
       console.log("처음 컴포넌트가 렌더링될 때만 실행") 
    }, []);

    
    return (
        <main className = "todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                { form }
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    );
};

export default TodoListTemplate;