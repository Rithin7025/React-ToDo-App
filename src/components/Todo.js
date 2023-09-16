import React from "react"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faDeleteLeft, faLitecoinSign, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export const Todo = ({task,toggleComplete,deleteTodo,editToDo}) => {

    
  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' : '' }`} onClick={()=> toggleComplete(task.id)}>{task.task}</p>
      <div>

        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editToDo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
