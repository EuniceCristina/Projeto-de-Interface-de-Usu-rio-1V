import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './componentes/form1'
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
