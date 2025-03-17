import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1 className='heading'>Counter App using React</h1>
          <div className='style-container'>
            <div className='card'>
                <h2>Current Count : {count}</h2>
              <button onClick={()=>setCount(count+1)}>+ Increment</button>
              <button onClick={()=> count > 0 && setCount(count - 1)}>- Decrement</button>
              <button onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
