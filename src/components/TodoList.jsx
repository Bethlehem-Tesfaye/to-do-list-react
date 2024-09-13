import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
 
   const {todos, handleEdit, handleDelete, handleComplete} = props;

    return (
     <ul className='main'>
        {todos.map((todo, todoIndex)=>{
            return(
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <input type="checkbox" onChange={()=>handleComplete(todoIndex)} checked={todo.completed}/>
                    <p className={todo.completed ? "completed" : "not-completed"}>{todo.text}</p>  
                </TodoCard>
            ) 
    })}
     </ul>
  )
}
