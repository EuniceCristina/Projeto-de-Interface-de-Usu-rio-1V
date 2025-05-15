
import Info1v from "./Info1v";
import EscopoReduz from "./EscopoReduz";
import {use, useState} from "react"

export default function Conditional(){
    let contente = ''
    let [opcao, setOpcao] = useState(muda=false);

    if (muda){
        contente = <Info1v/>
    }
    else{
        contente=<EscopoReduz/>
    }

    return(
        <>
            {contente}
            <button onClick={() => setOpcao(!muda)}>Mude</button>
        </>
    )
}