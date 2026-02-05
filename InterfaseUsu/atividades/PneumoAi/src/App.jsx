import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PneumoniaDiagnosisApp from './componentes/api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PneumoniaDiagnosisApp/>
    </>
  )
}

export default App
