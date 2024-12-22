import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./todoSlice";

const TodoList = () => {
    const [input, setInput] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddtodo = () => {
        if(input) {
            dispatch(addTodo({id: Date.now(), text: input}));
            setInput('')
        }
    };

    return(
        <div>
            <h1>TO DO LIST</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
            <button onClick={handleAddtodo}>Add Item</button>

            <table>
                {todos.map(todo => (
                    <tr key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>remove</button>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default TodoList;