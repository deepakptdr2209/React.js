import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"style={{backgroundColor:color}} >
        <div className="flex flex-wrap fixed justify-center bottom-11 inset-x-0 px-2">
           <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-xl">
              <button 
              onClick={()=>setColor('red')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"red"}}
              >Red</button>  
              <button  
              onClick={()=>setColor('green')}
               className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"green"}}
              >Green</button>  
              <button  
              onClick={()=>setColor('blue')}
               className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"blue"}}
              >Blue</button>  
              <button 
               onClick={()=>setColor('orange')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"orange"}}
              >Orange</button>  
              <button 
               onClick={()=>setColor('magenta')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"magenta"}}
              >Magenta</button>  
              <button 
               onClick={()=>setColor('grey')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"grey"}}
              >Grey</button>  
              {/* <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"purple"}}
              >Purple</button>  
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"black"}}
              >Black</button>  
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"olive"}}
              >Olive</button>  
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"magenta"}}
              >Magenta</button>  
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{backgroundColor:"brown"}}
              >Brown</button>   */}
           </div>
        </div>
      </div>
       
    </>
  )
}

export default App


// NOTES//
/*
onClick chata h ki use function do na ki fn ki value , pura ka pura fn hi dena pdta h
*/