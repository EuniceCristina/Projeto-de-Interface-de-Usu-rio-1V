import {obj} from './dados.js'

export default function FilterObj(){

    const selecionados = obj.filter(selecionado => selecionado.idade > 10 ) 

    return (
        <div>
            <ul>
                {selecionados.map(selecionado =>(
                        <li style={{color: 'green'}} key={selecionado.id}>{selecionado.nome}</li>
                ))}
            </ul>
        </div>
    )
}