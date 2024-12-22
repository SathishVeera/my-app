import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'React-Redux',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !==action.payload);
        }
    }
})
export const {addTodo, removeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;