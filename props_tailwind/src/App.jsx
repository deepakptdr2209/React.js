import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 // niche wale object se pta chla ki hum object ,
 //array sb is trah return kra skte h
  let myObj = {
   userName : "Deepak",
   password : "1234"
 }

  return (
    <>
      
       <h1 className='bg-white text-black underline mb-4 '>Tailwond CSS</h1> 
       <Card userName = "Chai" btnText = "viewMe" />
       <Card userName = "Code" btntext = "findMe"   />

    </>
  )
}

export default App
