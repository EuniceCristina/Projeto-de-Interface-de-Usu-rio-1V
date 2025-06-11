import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perguntas from './componentes/perguntas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Perguntas/>
    </>
  )
}

export default App
