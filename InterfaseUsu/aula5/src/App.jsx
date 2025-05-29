import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListasMap from './componentes/LitasMap'
import ListerFilter from './componentes/ListerFilter'
import ListerObj from './componentes/ListerObj'
import DropdownTimes from './componentes/DropDown'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListasMap/>
      <ListerFilter/>
      <ListerObj/>
      <DropdownTimes/>
    </>
  )
}

export default App
