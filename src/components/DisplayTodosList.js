import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer'
import TodoItem from './TodoItem'

const DisplayTodos = () => {
    const [todos, setTodos] = useState('')
    const [sort, setSort] = useState('active')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch((obj) => addTodos(obj));
        dispatch((id) => removeTodos(id));
        dispatch((obj) => updateTodos(obj));
        dispatch((id) => completeTodos(id))
    }, [])

  return (
    <div className="displaytodos">
       <div className="buttons">
           <button onClick={() => setSort("active")}>Active</button>
           <button onClick={() => setSort("completed")}>completed</button>
           <button onClick={() => setSort("all")}>All</button>
       </div>
       <ul>
           {todos.length > 0 && sort === "active"

               ? todos.map(item => {
                   return (
                       item.completed === false && (
                       <TodoItem key={item.id}
                                 item={item}
                                 removeTodo={removeTodos}
                                 updateTodo={updateTodos}
                                 completeTodo={completeTodos}
                            />
                        )
                    )
               })
          : null }
          {/* for completed items */}
          {todos.length > 0 && sort === "completed"

            ? todos.map(item => {
                return (
                    item.completed === false && (
                    <TodoItem key={item.id}
                            item={item}
                            removeTodo={removeTodos}
                            updateTodo={updateTodos}
                            completeTodo={completeTodos}
                        />
                    )
                )
            })
            : null }
          {/* for all items */}
          {todos.length > 0 && sort === "all"
            ? todos.map(item => {
                return (
                    <TodoItem key={item.id}
                            item={item}
                            removeTodo={removeTodos}
                            updateTodo={updateTodos}
                            completeTodo={completeTodos}
                        />
                )
            })
            : null }
       </ul>
    </div>
  )
}

export default DisplayTodos