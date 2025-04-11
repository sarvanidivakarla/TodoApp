import './App.css'
import { useState, useEffect } from 'react'
import Todo from './Todo'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'
import {db} from './firebase'

function App() {
  const [todo, setTodo]=useState([])
  const [input, setInput]=useState("")

  //Create Todo
  const createTodo = async (e)=>{
    e.preventDefault(e)
    if(input===''){
      alert('Please enter a valid input')
      return
    }
    await addDoc(collection(db, 'todos'), {
      task: input,
      status: false
    });
    setInput("")
  }

  //Read Todo from Firebase
  useEffect(()=>{
    const q = query(collection(db, 'todos'))
    const unsub = onSnapshot(q, (querySnapshot)=>{
      let todosArr = []
      querySnapshot.forEach((doc)=>{
        todosArr.push({...doc.data(), id: doc.id})
      })
      console.log(todosArr)
      setTodo(todosArr)
    })
    return () => unsub()
  }, [])

  //Update Todo in Firebase
  const toggleComplete = async(todo)=>{
    await updateDoc(doc(db, 'todos', todo.id), {
      status: !todo.status
    })
  }
  //Delete Todo
  const deleteTodo = async(id)=>{
    await deleteDoc(doc(db, 'todos', id) )
  }
  return (
   <div className='h-screen w-screen m-0  bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]'>
    <h1 className='text-center text-5xl py-6'>ToDo List</h1>
    <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
      <form className='flex justify-between ' onSubmit={createTodo}>
        <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Task' className='p-2 my-12 w-full bg-white border border-black rounded'/>
        <button className='p-2 px-4 my-12 bg-purple-500 text-white border border-black rounded cursor-pointer'>Add</button>
      </form>
      <ul className='list-none'>
        {
        todo.map((todo, id)=>(
          <Todo key={id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        ))
      }
      </ul>
      {todo.length<1 ? null : <p className='text-center p-2'>You have {todo.length} Todos. Make sure to complete all of them!</p>}
    </div>
   </div>
  )
}

export default App
