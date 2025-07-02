
import {useState} from 'react'
export default function Pergunta(props){

    let [mostrarResposta,setMostrarResposta] = useState(false)

    

    return(
        <>
        <div >
            <p>
                {props.pergunta}
            </p>
            <button onClick={() => setMostrarResposta(!mostrarResposta)}>Ver resposta</button>
            <p >{ mostrarResposta ? props.resposta : " "}</p>
        </div>
        </>
    )
}