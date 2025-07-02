import { useState } from "react"
export default function Info1v(){
     let [valor, setValor] = useState(0);
     let [valor2, setValor2] = useState(1);
     
     function numeric(){
        let variavel = valor2*2*2
        setValor2(variavel)
     }
     
     return(
        <>
        <div>
            <h1>Opa</h1>
            <button onClick={() => setValor(valor+1)}>
                Cliques {valor}
            </button>
            <button onClick={numeric}>
                Cliques {valor2}
            </button>
        </div>
        </>
    )
}

