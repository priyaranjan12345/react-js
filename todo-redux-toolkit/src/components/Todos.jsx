import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [todoMsg, setTodoMsg] = useState('')
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const onTapUpdateTodo = () => { }

    return (
        <>
            <div className='w-full'>
                {
                    todos.map(
                        (todo) => (
                            <div key={todo.id} className='flex w-full'>
                                <div key={todo.id} className="border border-black/10 rounded-l-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black bg-[#ccbed7] my-4 w-full">
                                    {todo.text}
                                </div>
                                <button className="rounded-r-lg px-3 py-1 bg-gray-200 shrink-0 my-4" onClick={() => dispatch(removeTodo(todo.id))}>
                                    ❌
                                </button>
                            </div>
                        )
                    )
                }
            </div>
        </>
    )
}

export default Todos