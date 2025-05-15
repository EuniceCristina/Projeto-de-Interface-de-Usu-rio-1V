import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Escopo from './componentes/Escopo'
import EscopoReduz from './componentes/EscopoReduz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Escopo/>
      <EscopoReduz/>
     
    </>
  )
}

export default App
