
import Info1v from "./Info1v";
import EscopoReduz from "./EscopoReduz";
import {useState} from "react"

export default function Conditional(){
    let contente = ''
    
    let [opcao, setOpcao] = useState(false);

    if (opcao){
        contente = <Info1v/>
        
    }
    else{
        contente=<EscopoReduz/>
       
    }

    return(
        <>
            {contente}
            <button style={{backgoundColor : "blue"}} onClick={() => setOpcao(!opcao)}>Mude</button>
        </>
    )
}