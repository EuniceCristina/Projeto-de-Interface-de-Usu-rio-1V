import { useState } from "react";
export default function Form(){

    const [tarefa,setTarefa] = useState('')

    const [tarefas,setTarefas] = useState([])

   const adicionaTarefa = (e) => {
        e.preventDefault();
        setTarefas([...tarefas,tarefa])
        setTarefa('')

    }
    function Reset(){
        setTarefas([])
    }

    return(
        <>
        <h1>Lista de tarefas</h1>
        
        <button onClick={Reset}>Resert</button>
        
        <form onSubmit={adicionaTarefa}>
            <input type="text" onChange={(e) => setTarefa(e.target.value) } value={tarefa} />
            <button>Enviar</button>
        </form>
        <ol>
             {/* Com a funcao map, separamos cada carro */}
             {/*o key é usado para informar qual carro esta em cada linha e cada carro separado usa a chave modelo e ano para pegar as respectivas informações */}
            {tarefas.map(tarefa => ( 
                <li >{tarefa}</li>
            ))}
        </ol>
        
        </>

    )

}