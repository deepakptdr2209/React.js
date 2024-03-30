import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length , setLength]= useState(8)
  const [numAllow, setNumAllow ] = useState(false)
  const [ charAllow, setCharAllow] = useState(false)
  const [password , setPassword]  = useState("")

  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  //copy passwodrd krne me km ata he
  const passRef = useRef(null)


  // yha useCallback ka use kr ke hum optimise kr lenge kyoki 
  //br br hme password generte krna d rha h number ,char, se
   const passwordGenerator = useCallback(()=>{
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numAllow) str+="0123456789"
     if(charAllow) str+="~`!@#$%^&*/?"

     // for loop se random pass ki length gerate kra denge
     for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1) // ye hme char ki index dega
       pass += str.charAt(char) // isme value of index store ho jayegi , 
       //for loop h to jtni length hogi utni length ka password aa jayega
       
     }
     setPassword(pass)
   }, [length,numAllow,charAllow,setPassword])
   
   // useEffect is a React Hook that lets you synchronize a component with an external system.
   //useEffect(setup, dependencies?)
   useEffect(()=>{
    passwordGenerator()
   },[numAllow,charAllow,length,passwordGenerator])

  //  let copyToClipboard = useCallback(()=>{
  //   window.navigator.clipboard.writeText(password)
  //  },[password])


   // my experiment below with copy
   const [copied, setCopied] = useState(false);
  
    const handleCopy =  () => {
     
        window.navigator.clipboard.writeText(password);
        setCopied(true); // Set copied state to true
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
     
    }
   

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md px-4 py-3 rounded-lg my-8 bg-gray-800 text-green-500'>
     <h1 className='text-4xl text-center text-white mt-4 mb-4'>
      Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="Password"
      readOnly
      ref={passRef}
     
       />
       <button
        
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 active:bg-green-600'
        onClick={handleCopy}
        >{copied ? 'Copied!' : 'Copy'}</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllow}
          id="numberInput"
          onChange={() => {
              setNumAllow((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                  setCharAllow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      {/* button ka use krke bhi genrate kra skte hh */}
      {/* <div>
        <button onClick={passwordGenerator}>generate</button>
      </div> */}
      </div>
      
     </div>
    </>
  )
}

export default App
