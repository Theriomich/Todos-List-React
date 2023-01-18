
// import './App.css';
import React from "react";
import { TodoCounter } from "./Todocounter";
import { TodoSearch } from "./Todosearch";
import {TodoItem} from "./TodoItem";
import { TodoList } from "./Todolist";
import {CreateTodoButton} from "./CreateTodoButton";


const todos=[
  {text:"Cortar cebolla",complited:false},
  {text:"Tomar el curso de intro a react",complited:false},
  {text:"Llorar con la llorona",complited:false}
]

function App(props) {
  return(
    
<React.Fragment>
<TodoCounter/>

<TodoSearch/>

<TodoList>
  {todos.map(todo=>(
  <TodoItem key={todo.text} text={todo.text}/>))}
  
  </TodoList>
<CreateTodoButton/>


</React.Fragment>



  );
  
  
}

export default App;
