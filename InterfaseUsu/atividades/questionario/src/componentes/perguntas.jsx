import Pergunta from "./pergunta";
import {dados} from './dados.js'

export default function Perguntas(){

    return(
       
        <ol>
            {dados.map(dado => (
                <li key={dado.id}>
                    <Pergunta pergunta={dado.pergunta} resposta={dado.resposta}/>
                </li>
            ))}
        </ol>
      
    )
}
