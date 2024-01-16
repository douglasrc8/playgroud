import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>

      <div style={{
        fontFamily: "sans-serif",
        color: "blue",
        textAlign: "center"

      }}>
        <Home
          titulo="Componente Home"
          texto="Este texto foi enviado pelo componemte app"
        />
        <Contador />
        <Tarefa />
      </div>
    </>
  )
}

export default App
