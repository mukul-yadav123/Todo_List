import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid';
import EditTodo from './EditTodo';
uuidv4();




const TodoWrapper = () => {

  const[todos,setTodos] = useState([]);
  const addTodo = todo =>{

    setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false}])
  }


  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo,completed: !todo.completed
    }: todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo =>todo.id!==id));
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? 
      {...todo,isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task,id) => 
  {
    setTodos(todos.map(todo => todo.id === id? {
      ...todo, task,isEditing:!todo.isEditing
    }: todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo = {addTodo}/>
      {
        todos.map((todo,index) => {
          {
          return  todo.isEditing ? (<EditTodo task={todo.task} key={todo.id} editTodo={editTask} id={todo.id}/>) 
            :
          (<Todo completed={todo.completed} 
          id={todo.id} toggleComplete={toggleComplete} 
          task={todo.task} key={index}
          deleteTodo={deleteTodo}
          editTodo={editTodo}/>)
       
}})
      }
    </div>
  )
}

export default TodoWrapper