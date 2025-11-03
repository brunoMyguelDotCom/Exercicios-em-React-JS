import { useState } from 'react'

import "./ToDoApp.css";

const ToDoApp = () => {

    // lista de tarefas
    const [todos, setTodos] = useState([]);

    // estado de texto da tarefa
    const [inputValue, setinputValue] = useState("");

    // add tarefa
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
            };

            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setinputValue("");
        }
    };

    return (
        <div className='app-container'>
            <h1 className="title">ToDoApp</h1>

            {/* Form para add tarefa */}
            <form onSubmit={handleSubmit} className='form-container'>

                <input type="text" placeholder='Adicione uma tarefa' value={inputValue} onChange={(e) => setinputValue(e.target.value)} className='input-field' />

                <button type='submit' className='add-buttom'>
                    Adicionar
                </button>

            </form>

            {/* Lista de tarefas */}
            {todos.length === 0 && <p className='empty'> Nao há tarefas</p>}

            <ul className='todo-list'>
                {todos.map((todo) => (
                    <li key={todo.id} className='todo-item'>
                        {todo.text}
                    </li>
                ))}

            </ul>
        </div >
    )
}

export default ToDoApp
