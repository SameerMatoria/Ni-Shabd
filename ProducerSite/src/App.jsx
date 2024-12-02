import { useState } from 'react'
import './App.css'
import MainPanel from './pages/MainPanel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPanel />
    </>
  )
}

export default App
