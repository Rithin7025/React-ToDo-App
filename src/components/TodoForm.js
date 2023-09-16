import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim().length ===0){
         alert('Oops!!!cannot add empty tasks')
        }else{

            addTodo(value);
        }

        setValue('');



    }
  return (
    <form  className ="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='what is the task today ?' value={value} onChange={(event)=> setValue(event.target.value)}/>
        <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}
