import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer'


const Todos = () => {
    const [todo, setTodo] = useState('') 
    const dispatch = useDispatch()
    const todos = useSelector(state =>  state)

    useEffect(() => {
        dispatch((obj) => addTodos(obj));
        dispatch((id) => removeTodos(id));
        dispatch((obj) => updateTodos(obj));
        dispatch((id) => completeTodos(id))
    }, [])

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    return (
        <div className="addTodos">
          <input 
             type='text' 
             className='todo-input' 
             onChange={(e) => handleChange(e)}
             />
 
          <button className='add-btn' onClick={() => todos.addTodo({
              id: Math.floor(Math.random() * 1000),
              item: todo,
              completed: false
          })}>
              Add
          </button>
        </div>
     )
 }

export default Todos
 