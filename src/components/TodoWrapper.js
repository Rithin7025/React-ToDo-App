import React,{useState} from 'react';
import { TodoForm } from './TodoForm';
import {v4 as uuidv4} from 'uuid'; 
import { Todo } from './Todo';
import { EditTodoForm } from './EditToDoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos,setTodos] = useState([]);

    const addTodo =(todo)=>{
        setTodos([...todos,{id: uuidv4(),task:todo,completed  : false , isEditing : false}])
        console.log(todos)
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))
    }
 

    const deleteTodo = id => {
        setTodos(todos.filter((todo)=>{
            return todo.id !== id;
        }))
    }
    
    const editToDo = id => {
        setTodos(todos.map(todo => todo.id === id? {...todo, isEditing : !todo.isEditing}: todo))
    }

    const editTask = (task,id)=>{
         //Check if the task is empty
        if(!task.trim()){
          alert('task cannot be empty!');
          return;
        }

        //Check the tast edited is duplicate
        if (todos.some((todo) => todo.task === task && todo.id !== id)) {
          alert("Task already exists.")
          return
        }
        return setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing : !todo.isEditing} : todo))
    }
  return (  
    <div className="TodoWrapper">
      <h2 style={{ color: "white", fontSize: "20px" }}>Plan your Day!!</h2>

      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  )
}
