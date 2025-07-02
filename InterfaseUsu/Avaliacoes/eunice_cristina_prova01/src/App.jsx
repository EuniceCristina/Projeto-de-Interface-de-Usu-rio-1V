import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './componentes/contador'
import Listagem from './componentes/listagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contador/>
      <Listagem/>
    </>
  )
}

export default App
