
import Claro from "./Claro";
import Escuro from "./Escuro";
import {useState} from "react"

export default function Modo(){
    let contente = ''
    let modo = 'Escuro'
    
    let [opcao, setOpcao] = useState(false);

    if (opcao){
        document.body.style.backgroundColor = opcao ? 'black' : 'white';
        document.body.style.color = opcao ? 'white' : 'black'
        modo = 'Claro'
        
    }
    else{
        document.body.style.backgroundColor = opcao ? 'black' : 'white';
        document.body.style.color = opcao ? 'white' : 'black'
        modo = 'Escuro'
       
    }

    return(
        <>
            {contente}
            <button onClick={() => setOpcao(!opcao)}>Modo {modo}</button>
        </>
    )
}