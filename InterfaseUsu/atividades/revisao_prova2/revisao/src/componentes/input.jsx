import {useState} from "react";
import { useEffect } from "react";
export default function Input(){
    const [texto,setTexto] = useState("")

    function handleColor(){
        const cor= ["#FFC0CB","#FF69B4","#DB7093","#FF1493"]
        const randomColor = cor[Math.floor(Math.random() * cor.length)];
        document.body.style.backgroundColor = randomColor;

    }

    useEffect(() => 
    {handleColor()},[{texto}])

    return(
        <>
        <form action="">
            <input type="text"placeholder="Digite aqui" onChange={(e) => setTexto(e.target.value)} value={texto}/> <br /> <br />
            <button>Enviar</button>
        </form>
        </>
    )
}