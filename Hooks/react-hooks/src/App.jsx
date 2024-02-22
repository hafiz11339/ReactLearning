import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './Btn'
import ModeToggler from './ModeToggler'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ModeToggler />
      
    </>
  )
}

export default App
