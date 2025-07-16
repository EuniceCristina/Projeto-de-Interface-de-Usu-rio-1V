import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountClicks from './componentes/countClicks'
import EffectAPI from './componentes/effectApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <EffectAPI/>
    </>
  )
}

export default App
