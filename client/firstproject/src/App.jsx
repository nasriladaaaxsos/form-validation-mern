import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/HomeComponent'
import About from './Components/about'
import ContactComponent from './Components/ContactComponent'
import Regester from './Components/Regester'
import { Routes, Route, Link} from 'react-router-dom'
import LoginComponent from './Components/LoginComponent'
function App() {

  const [ mymessage , setMymessage] = useState("")
  const printMsg = ( msg)=>{
    setMymessage(msg)
  }


  return (
    <>
    <Routes>
      <Route path="/about/:name" element={ <About textMessage = {printMsg } /> }/>
    <Route path ="/home" element={<Home name="Christine"  location = "WB" hobbies={["Coding" , "Hiking", "Reading"]} />}  />
    </Routes>

      <ContactComponent fname="Malek" msg = {mymessage} >
                <h1>This is header one </h1>
                <h2>This is header 2</h2>
                <h3>This is header 3</h3>
      </ContactComponent>
      <Regester />
      <LoginComponent />
    </>
  );
}

export default App
