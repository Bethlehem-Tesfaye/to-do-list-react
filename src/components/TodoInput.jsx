import React, { useState } from 'react'

export default function TodoInput(props) {
    const {handleAddTodos, value, setValue} = props; 
    // const[value, setValue] = useState("");


    function setTodo(e){
        
        setValue(e.target.value) 
    }

  return (
    <header>
        <input value={value} placeholder='enter task...' onChange={setTodo}></input>
        <button onClick={()=>{
            if(value.trim()){
                handleAddTodos(value)
                setValue("")
            }
            }}>add</button>
    </header>
  )
}
