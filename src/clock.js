import React, { useState ,useEffect } from 'react';
import Hero from './Home/Hero';
import Signup from './Home/Signup';
import Signin from './Home/Signin';
 

function App() {

  const [condition,setCondition]=useState(true)

  console.log("rerender in app");

  useEffect(function(){
    console.log("use effect mount conditin");
    setInterval(function(){
      console.log("consdition rerender");
      setCondition((c)=>!c)
    },6000)
  },[])
    return (
      <>
  {condition && <Counter/>}
 
      </>
    );
}

function Counter(){

  const [count,setCount]=useState(0);
  
  console.log("rerender in counter");

  useEffect(function(){
    console.log("use effect mount");
   const clock= setInterval(function(){
      console.log("clock rerender");
      setCount((c)=>c+1)
    },1000)

    return function(){
      console.log("unmount is take place")
      clearInterval(clock)
    }
  },[])


 return <>
  <div>
    <h1>counter {count}</h1>
  </div>
 </>



 return<>
 

 </>



}

 

export default App;
