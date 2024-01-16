import { useState } from "react"

function Contador(){

        const [valor, setValor] = useState(0);

        function hansleClick(){
            setValor(valor + 1);
        }

    return(
        <div style={{
            fontFamily:"sans-serif",
            color:"blue", 
            textAlign:"center" 
            
        }}>
            <h2>Componente contador</h2>
             <p>O valor atual é: {valor}</p>
             <button onClick= {hansleClick}>Adicionar + 1</button>
        </div>
    )
}

export default Contador