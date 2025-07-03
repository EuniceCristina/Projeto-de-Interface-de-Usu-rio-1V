import "./form.css"
import Filter from "./filter";
import { useState } from "react";
export default function Form(){

    const [tarefa,setTarefa] = useState({nome : "",status : "", prioridade : "", data : ""})

    const [tarefas,setTarefas] = useState([])

    

   const adicionaTarefa = (e) => {
        e.preventDefault();
       
        setTarefas([...tarefas,tarefa])
        setTarefa({nome : "",status : "", prioridade : "", data : ""})

    }
    
    function concluirTarefa(nome){
    const tarefas_novas = tarefas.map(tarefa =>
        tarefa.nome == nome ? {...tarefa,status:'Realizada'} : tarefa
    );
    
    setTarefas(tarefas_novas)}

    function abrirTarefa(nome){
        const tarefas_novas = tarefas.map(tarefa =>
            tarefa.nome == nome ? {...tarefa,status:'Não realizada'} : tarefa
        );

    setTarefas(tarefas_novas)
    
    }

    function Excluir(nome){
        const novasTarefas = tarefas.filter(tarefa => tarefa.nome !== nome)
        setTarefas(novasTarefas)
    }

   

    return(
        <>
        <h1>Lista de tarefas</h1>
        
       <Filter tarefas={tarefas} setTarefas={setTarefas}/>

        <h2>Adicione tarefas</h2>
        <form onSubmit={adicionaTarefa}>
           
            <input placeholder="Nome da tarefa" type="text" onChange={(e) => setTarefa({...tarefa, nome : e.target.value})} value={tarefa.nome} />
            <select id="status" onChange={(e) => setTarefa({...tarefa, status : e.target.value})} value={tarefa.status} >
                <option value="Não realizada">Status</option>
                <option value="Realizada">Realizada</option>
                <option value="Não realizada">Não realizada</option>
                <option value="Pendente">Pendente</option>
            </select>
            <select name="prioridade" id="priorioridade" onChange={(e) => setTarefa({...tarefa, prioridade : e.target.value})} value={tarefa.prioridade}>
                <option value="Alta">Prioridade</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baixa">Baixa</option>
            </select>
            <input type="date" onChange={(e) => setTarefa({...tarefa, data : e.target.value})} value={tarefa.data}/>
            <button>Enviar</button>
        </form>

        {tarefas[0] ? <table border="1">
            <tr>
                <th>Tarefa</th>
                <th>Status
                </th>
                <th>Prioridade</th>
                <th>Data</th>
                
            </tr>
           
                {tarefas.map(tarefa => ( 
                 <tr>
                <td>{tarefa.nome}</td>
                
                <td>{tarefa.status}</td>
                <td>{tarefa.prioridade}</td>
                <td>{tarefa.data}</td>
                <td>{tarefa.status === "Pendente" || tarefa.status === "Não realizada" ? <button onClick={() => concluirTarefa(tarefa.nome)}>Concluir</button> : <button onClick={() => abrirTarefa(tarefa.nome)}>Abrir</button>}</td>
                <td><button onClick={() => Excluir(tarefa.nome)}>Excluir</button></td>
                </tr>
                
            ))}
            
            
        </table>
        :
        <p></p>}
       
        
        </>

    )

}