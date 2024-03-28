import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(1)

  const addValue = ()=>{
    if(counter<=19){
      setCounter(counter+1)
    }
   
}


  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
   
     }

 
 

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter {counter} </h2>
      <button onClick={addValue} >AddValue</button>
      <br />
      <br />
      <button onClick={removeValue} >RemoveValue</button>
        
    </>
  )
}

export default App
