import React, { useState, useRef } from 'react';
import './Form.css';


const Form = ({text, onChange, onKeyPress, onCreate}) => {
    // value -> 인풋의 내용
    // onChange -> 인풋 내용이 변경될 때 실행될 함수
    // onCreate -> 버튼이 클릭될 때 실행될 함수
    // onKeyPress -> 인풋 입력 시 엔터키를 눌렀을 때 실행될 함수
    


    return (
        <div className="form">
            <input id="inputForm" 
                value={text}
                onChange={onChange} 
                onKeyPress={onKeyPress} />
            <div className="create-button" 
                onClick={onCreate}>
                추가
            </div>
        </div>
    )
}

export default Form;