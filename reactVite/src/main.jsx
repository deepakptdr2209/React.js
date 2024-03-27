import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
import './Index.css'

function MyApp(){
  return(
  <div>chai and code!</div>)
}
//++ nihe wala code yha njhi km kr rha kyoki custom react bnaya h hmne or hmne custom render ka code bhilikha tha
//but react jo yha render kr rha h vo uska khud ka h render krne ka 
// const reactElement = {
//   type : 'a',
//   props : {
//       href : "https://www.google.com",
//       target : "_blank"
//   },
//   children : "click me to visit"
// }


/* now agr element bnana h to react use krna pdega taki vo render kr ske
custom bnane k liye kuch rule follow krne jaruri h
*/
const reactElement =React.createElement(
  //first parameter jo expected h vo h tag eg: 'a','p' etc
  'a',
  //second parameter hould be object ,
  // object me hume atrribute dene honge agr attribute nhi to khali chod skte h
  {href:"https://google.com" , target:"_blank"},
  // ab expected he direct text
  "google pr jao"
)

// see the below is  converted to object and then render by react
const anotherElement = (
  <a href="https://www.google.com">visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
<App/>
)
