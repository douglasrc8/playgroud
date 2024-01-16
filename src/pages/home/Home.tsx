import { useState } from "react"

interface homeProps{
    titulo: string;
    texto: string;
}

function Home (props: homeProps){

    const [islogged, setIslogged] = useState(false);
    return(
        <>
        {
            islogged ? (
                <div>
                    <h2>{props.titulo}</h2>
                    <p>{props.texto}</p>
                </div>
             ) : (
                <div style={{
                    fontFamily:"sans-serif",
                    color:"blue", 
                    textAlign:"center" 
                    
                }}>
                    <h2>Login</h2>
                    <button onClick={() => setIslogged(true)}>Entrar</button>
                </div>
         ) 
             }
             </>
    )
}

export default Home