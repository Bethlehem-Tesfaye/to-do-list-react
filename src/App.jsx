 import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
 import TodoList from "./components/TodoList"
function App() {


 const[todos, setTodos]= useState([])
 
 const[value, setValue] = useState(""); 

function saveTodos(newTodo){
  setTodos(newTodo);
  localStorage.setItem("tasks", JSON.stringify(newTodo));

  
}
 function handleAddTodos(newTodo){
    const newTodoList = [...todos,  {text:newTodo, completed:false}]
    // setTodos(newTodoList); 
    saveTodos(newTodoList);
 }

 function handleDelete(index){
    // setTodos(()=>[...todos.filter((_, i)=>i!=index)]);
    const ddeleteTodo = todos.filter((todos, i)=>i!=index);
    saveTodos(ddeleteTodo);
     
 }

 function handleEdit(index){
  setValue(todos[index].text);
  // setTodos(()=>[...todos.filter((_, i)=>i!=index)]); 
  handleDelete(index)
   
   
 } 

 function handleComplete(index){
  const toogleTodo = todos.map((todo, i)=>{
    return (i===index? {...todo, completed:!todo.completed}: todo)
  })
   saveTodos(toogleTodo);

 }

 useEffect(()=>{

  let localTodos = localStorage.getItem("tasks");
   if(localTodos){
     setTodos(JSON.parse(localTodos));
   }
 },[])
 


 
    return(
       <>
          <TodoInput handleAddTodos={handleAddTodos} value={value} setValue={setValue}></TodoInput>
          <TodoList handleDelete={handleDelete}  todos={todos} handleEdit={handleEdit} handleComplete={handleComplete}   ></TodoList>
       </>
    )
}

export default App
