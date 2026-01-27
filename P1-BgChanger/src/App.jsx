import { useState } from 'react'

function App() {
  const [color, setColor] = useState("Yellow")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style = {{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

            <button onClick={() => setColor("crimson")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor:'crimson'}}> Crimson
            </button>

            <button onClick={() => setColor("olive")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor:'Olive'}}> Olive
            </button>

            <button onClick={() => setColor("Lavender")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor:'Lavender'}}> Lavender
            </button>

            <button onClick={() => setColor("Pink")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor:'Pink'}}> Pink
            </button>

            <button onClick={() => setColor("Orange")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor:'Orange'}}> Orange
            </button>

            <button onClick={() => setColor("Purple")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor:'Purple'}}> Purple
            </button>

            <button onClick={() => setColor("Grey")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style = {{backgroundColor:'Grey'}}> Grey
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
