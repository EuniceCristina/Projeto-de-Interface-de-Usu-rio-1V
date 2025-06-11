import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './componentes/title'
import Tarefa from './componentes/tarefa'
import Main from './componentes/body'
import Check from './componentes/check'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Main>
     <Title/>
     <Tarefa/>
    </Main>
    </>

  )
}

export default App
