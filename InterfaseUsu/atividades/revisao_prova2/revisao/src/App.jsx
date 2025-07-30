import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modo from './componentes/modo'
import Input from './componentes/input'
import Login from './componentes/login'
import Listas from './componentes/listas'
import Form from './componentes/tarefas'
import API from './componentes/api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <API/>
    </>
  )
}

export default App
