import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
  <>
  <Home 
    titulo = "componente Home"
    texto = "Este texto foi enviado pelo componemte app"
  />
<Contador />
<Tarefa />
  </>
  )
}

export default App
