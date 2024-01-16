import { useEffect, useState } from "react";
function Tarefa(){

  
        const [completed, steCompleted] = useState(false);
        const [tarefa, steTarefa] = useState('');

        useEffect(() => {
            if(completed){
                steTarefa("Parabens! você concluiu a tarefa");
            }

        }, [completed])
    

    return(
        <div style={{
            fontFamily:"sans-serif",
            color:"blue", 
            textAlign:"center" 
            
        }}>
            <h2>Componente Tarefa</h2>
            <h3>{tarefa}</h3>
            <p>Conclua a tarefa</p>
            <button onClick = {() => steCompleted(true)}>Concluir Tarefa</button>
        </div>
    )
}

export default Tarefa