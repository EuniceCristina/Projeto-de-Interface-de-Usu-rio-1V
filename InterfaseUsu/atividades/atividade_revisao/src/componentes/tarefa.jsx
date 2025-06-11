import Check from "./check";
import {dados} from './dados.js'

export default function Tarefas(){

    return(
        <>
        <ol>
            {dados.map(dado =>(
                <li><Check id={dado.id} info={dado.info} status={dado.status}/></li>
            ))}
        </ol>
        </>
    )
}

