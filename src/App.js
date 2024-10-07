 
import './App.css';
import React, { useState } from 'react';
function App() {

  const [todo,setTodo]= useState(["go to gym"]);
  const [input ,setInput]=useState('')

function addNewTodo(  ){
 
  setTodo(pre=>[...pre,input ])
}

function chnageInput(event){
 
  setInput(event.target.value)
}

function deleteTodo(index){
const updatedTodo = todo.filter((todo,i)=> i !== index) ;
setTodo(updatedTodo)
}

function editTodo(index){
 console.log(index)
}

  return (
    <div className="App">
       <h1>hi my name is bhushan here is my todolist</h1>
       <input
          type="text"
             
          onChange={chnageInput}  
        />
     <button onClick={addNewTodo}>Add todo?</button>
       
       <div className='content'>
          <h1>herer are the todo</h1>
          {todo.map((todo,i)=>{
           return <div key={i}>{todo}  <button onClick={()=>{deleteTodo(i)}}> Delete </button> <button onClick={()=>{editTodo(i)}}>Edit</button>  </div>  
          })}
       </div>
    </div>
  );
}

export default App;
