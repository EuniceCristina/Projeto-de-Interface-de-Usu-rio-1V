import "./form.css"
import { useState } from "react";
export default function Form(){

    const [tarefa,setTarefa] = useState({nome : "",status : ""})

    const [tarefas,setTarefas] = useState([])

    

   const adicionaTarefa = (e) => {
        e.preventDefault();
       
        setTarefas([...tarefas,tarefa])
        setTarefa({nome : "",status : ""})

    }
    function Reset(){
        setTarefas([])
    }

    function concluirTarefa(nome){
    const tarefas_novas = tarefas.map(tarefa =>
        tarefa.nome == nome ? {...tarefa,status:'Realizada'} : tarefa
    );
    setTarefas(tarefas_novas);
}
    function abrirTarefa(nome){
        const tarefas_novas = tarefas.map(tarefa =>
            tarefa.nome == nome ? {...tarefa,status:'Não realizada'} : tarefa
        );

    setTarefas(tarefas_novas)
    
    }

    function Ordenar(ordem){
        if (ordem === 'cres'){
            const tarefas_cres = [...tarefas].sort((a,b) =>
                a.nome.localeCompare(b.nome))
            setTarefas(tarefas_cres);
        }
        else {
            const tarefas_cres = [...tarefas].sort((a,b) =>
                b.nome.localeCompare(a.nome))
            setTarefas(tarefas_cres);
        }
    }

    return(
        <>
        <h1>Lista de tarefas</h1>
        
        <button onClick={Reset}>Resert</button> <br />
        
        Filtrar<button onClick={() => Ordenar('cres')}>Crescente</button> <button onClick={() => Ordenar(   'desc')}>Decrescente</button>

        <h2>Adicione tarefas</h2>
        <form onSubmit={adicionaTarefa}>
           
            <input placeholder="Nome da tarefa" type="text" onChange={(e) => setTarefa({...tarefa, nome : e.target.value})} value={tarefa.nome} />
            <select id="status" onChange={(e) => setTarefa({...tarefa, status : e.target.value})} value={tarefa.status} >
                <option value="#">Status</option>
                <option value="Realizada">Realizada</option>
                <option value="Não realizada">Não realizada</option>
                <option value="Pendente">Pendente</option>
            </select>
            <button>Enviar</button>
        </form>

        {tarefas[0] ? <table border="1">
            <tr>
                <th>Tarefa</th>
                <th>Status
                </th>
                
            </tr>
           
                {tarefas.map(tarefa => ( 
                 <tr>
                <td>{tarefa.nome}</td>
                <td>{tarefa.status}</td>
                <td>{tarefa.status === "Pendente" || tarefa.status === "Não realizada" ? <button onClick={() => concluirTarefa(tarefa.nome)}>Concluir</button> : <button onClick={() => abrirTarefa(tarefa.nome)}>Abrir</button>}</td>
               
                </tr>
                
            ))}
            
            
        </table>
        :
        <p></p>}
       
        
        </>

    )

}