import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './Componentes/Props'
import foto from './assets/react.svg'
import Card from './Componentes/Card'
import Children from './Componentes/Children'

function App() {
  let eunice = "Eunice"
  const [count, setCount] = useState(0)

  return (
    <>
      <Props name={eunice} newname={"Cristina"} atributo={"aluno"}/>
      <Props/>
      <Props nome={'name'} imagem={foto}/>
      <Children>
      <Card/>
      </Children>
      
      
    </>
  )
}

export default App
