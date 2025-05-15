import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info1v from './componentes/Info1v'
import EscopoReduz from './componentes/EscopoReduz'
import Conditional from './componentes/Conditional'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Conditional/>
    </>
  )
}

export default App
