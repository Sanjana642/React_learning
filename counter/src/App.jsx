import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)
  // let counter = 5

  const addValue = () =>{
    // console.log("value added", counter);
    // counter = counter + 1;
    setCounter(counter + 1)
  }

  //interview que :- (what will be value)
  //setCounter (prevCounter => prevCounter + 1)
  //setCounter (prevCounter => prevCounter + 1)
  //setCounter (prevCounter => prevCounter + 1)
  //setCounter (prevCounter => prevCounter + 1)
  // ans : it will direct be 19 as default value is 15

  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}> Add value {counter} </button>
      <button onClick={removeValue}> Remove value {counter} </button>

      <p>footer : {counter}</p>
    </>
  )
}

export default App
