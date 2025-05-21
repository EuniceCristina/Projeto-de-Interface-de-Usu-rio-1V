<<<<<<< HEAD

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
=======

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
            <button onClick={() => setOpcao(!opcao)}>Mude</button>
        </>
    )
>>>>>>> 77aebd45a7051206aa78fdb96d2349ff13482785
}