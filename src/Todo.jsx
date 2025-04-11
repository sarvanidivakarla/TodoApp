import React from 'react'

export default function Todo({todo, toggleComplete, deleteTodo}) {
  return (
    <li className={`flex justify-between p-4 my-2 capitalize ${todo.status ? 'bg-slate-400' : 'bg-slate-200'}`}>
        <div className='flex'>
            <input onChange={()=>toggleComplete(todo)} type="checkbox" className='flex ' checked={todo.status}/>
            <p onClick={()=>toggleComplete(todo)} className={`ml-2 cursor-pointer ${todo.status ? 'text-gray-600 line-through' : ''}`}>{todo.task}</p>
        </div>
        <button onClick={()=>deleteTodo(todo.id)} className={`cursor-pointer flex items-center border rounded-md px-3 py-1 ${todo.status ? 'border-gray text-gray-600' : 'border-black'}`}>Delete</button>
    </li>
  )
}
