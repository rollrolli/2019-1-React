import { createAction, handleActions } from 'redux-actions';
import { List, Map } from 'immutable';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const CREATE = 'todos/CREATE';
const CHECK = 'todos/CHECK';
const REMOVE = 'todos/REMOVE';

let id = 3;
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, text => ({ text, id: id++ }));
export const check = createAction(CHECK, id => id);
export const remove = createAction(REMOVE, id => id);


const initialState = Map({
    input: '',
    todoItemList: List([
        Map({ id: 0, text: ' 안녕', checked: false }),
        Map({ id: 1, text: ' 리액트', checked: true }),
        Map({ id: 2, text: ' 반가워', checked: false }),
    ]),
});

export default handleActions(
    {
        [CHANGE_INPUT]: (state, action) =>
            state.set('input', action.payload),

        [CREATE]: (state, action) =>
            state.update('todoItemList', todoItemList =>
                todoItemList.push(
                    Map({
                        id: action.payload.id,
                        text: action.payload.text,
                        checked: false,
                    })
                )
            ),

        [CHECK]: (state, action) => {
            const index = state.get('todoItemList').
                            findIndex(item => item.get('id') === action.payload);
            return state.updateIn(['todoItemList', index, 'checked'], checked => !checked);
        },

        [REMOVE]: (state, action) => {
            const index = state.get('todoItemList').
                            findIndex(item => item.get('id') === action.payload);
            return state.deleteIn(['todoItemList', index]);
        },
    },
    initialState
);