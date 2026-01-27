import { useCallback, useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //useRef hook -   
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (noAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)

   }, [length, noAllowed, charAllowed, setPassword]) 
   //setPassword used because as password is giving infinte loop and it is concept of memoization, saved value in cached, optimize way, [] - to optimise this method (useCallback)

  //on react we are compling js so we can write window directly but in next.js it will be serverside rendering (because there is no window object in server)
   const copyPasswordToClipboard = useCallback (() => {
    passwordRef.current?.select()
    //if you want to select range of password to be copied then :-
    passwordRef.current?.setSelectionRange(0,6);
    window.navigator.clipboard.writeText(password)
   }, [password])
  useEffect (() => {
    passwordGenerator()
  }, [length, noAllowed, charAllowed, passwordGenerator]) //[] - if it is having any issue run it again 
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-amber-100 bg-gray-700'> 

      <h1 className='font-light text-2xl text-center text-white my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='w-full bg-white text-gray-500 outline-none px-3 py-1'
          placeholder='password' 
          readOnly 
          ref={passwordRef} /> 

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 '> copy </button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
              <input type="range" 
              min={6} 
              max={25} 
              value={length} 
              className='cursor-pointer' 
              onChange={(e) => {setLength(e.target.value)}} 
              /> 
              <label htmlFor="length">length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {noAllowed}
            id = "number input"
            onChange={() => { setNoAllowed ((prev) => !prev); }
            } /> 
            <label htmlFor="number-input">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {charAllowed}
            id = "number input"
            onChange={() => { setCharAllowed ((prev) => !prev); }
            } /> 
            <label htmlFor="char-input">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

