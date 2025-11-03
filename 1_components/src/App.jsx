import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importar componente filho
import FunctionComponent from "./components/FunctionalComponent"
import PropsExemple from './components/PropsExemple';

// componente pai
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Hello World</h1>

      {/* chamada funcao no JSX | control + barra para comentar */}
      <FunctionComponent />
      {/* é colocado entre chaves quando nao é String */}
      <PropsExemple nome="teste" idade={18} />
    </>
  )
}

export default App
