import React, { component, useEffect } from 'react';
import './TodoItem.css';

const TodoItem = ({text, checked, id, onToggle, onRemove}) => {


    useEffect(() => {
        console.log("TodoItem "+id+" : checked 바뀌었을 때만 실행");
    }, [checked]);


    return (
        <div className="todo-item" onClick = {() => onToggle(id)}>
            <div className="remove" onClick={ (e) => {
                    e.stopPropagation();    
                    // x 클릭 시 onRemove와 부모 div의 onClick인 onToggle도
                    // 같이 실행되는 것을 방지함 (이벤트의 확산을 멈춰줌!)
                    onRemove(id)
                }
            }>&times;</div>
            <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>
            { checked && (<div className="check-mark">✓</div>) }
        </div>
    );
};

export default TodoItem;