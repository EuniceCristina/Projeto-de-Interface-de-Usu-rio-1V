import Form from "./form";
export default function Filter({tarefas, setTarefas}){
    function Reset(){
        setTarefas([])
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

    const ordenarPorPrioridade = () => {
        const prioridadeValor = { "Alta": 3, "Media": 2, "Baixa": 1 }
        const listaOrdenada = [...tarefas].sort((a, b) =>
            (prioridadeValor[b.prioridade] - prioridadeValor[a.prioridade] ?? 0)
        )
        setTarefas(listaOrdenada)
    }

    const ordenarPorData = () => {
        const tarefas_cres = [...tarefas].sort((a,b) =>
                a.data.localeCompare(b.data))
            setTarefas(tarefas_cres);
    }

    

    return(
        <>
        <button onClick={Reset}>Resert</button> <br />
        
        Filtrar<button onClick={() => Ordenar('cres')}>Crescente</button> <button onClick={() => Ordenar('desc')}>Decrescente</button>
        <button onClick={() => ordenarPorPrioridade()}>Prioridade</button>
        <button onClick={() => ordenarPorData()}>Data</button>
        </>
    )
}