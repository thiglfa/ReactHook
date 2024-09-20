import { useState } from 'react'
import './App.css'
import ExemploEffect from './components/ExemploEffect'

function App() {

  const [exemplo, setExemplo] = useState(true)
  return (
    <>
    <h1>React - Hooks - useEffect</h1>

    <button onClick={()=>setExemplo(!exemplo)}>
      {exemplo ? 'Apagar Exemplo' : 'Criar Exemplo'}
    </button>
    {exemplo ? <ExemploEffect /> : ''}
    </>
  )
}

export default App
