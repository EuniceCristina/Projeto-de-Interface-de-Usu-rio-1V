import { useState } from 'react';
import './check.css'
export default function Check(props){


    let [estado,setEstado] = useState(props.status)

    function mudarStatus(){
        const botao = document.getElementById(props.id)
        if (estado === 'Pendente') {
            setEstado('Concluida');
            botao.style.backgroundColor = 'green';
        } else {
            setEstado('Pendente');
            botao.style.backgroundColor = 'red';
        }

    }

    return(
        <>
       <div className="tarefa">
        <p>{props.info}</p>
        <button onClick={mudarStatus} id={props.id}>{estado}</button>
       </div>
        </>
    )
}