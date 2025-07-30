import { useState } from "react";
import { useEffect } from "react";
export default function Modo(){
    const [modo,setModo] = useState(false)

    function modoEscuro(){
        if (modo===true){
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        }
        else{
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        }
    }

    useEffect(() =>
    {modoEscuro()},[modo])

    

    

    return(
        <>
        Bem vindo a revisão <br></br>

        <button onClick={() => setModo(!modo)}>{modo ? "Light" : "Dark"}</button>
        </>
    )
}