
import Claro from "./Claro";
import Escuro from "./Escuro";
import {useState} from "react"

export default function Modo(){
    let contente = ''
    let modo = 'Escuro'
    
    let [opcao, setOpcao] = useState(false);

    if (opcao){
        document.body.style.backgroundColor = opcao ? "black" : "white";
        document.body.style.color = opcao ? "white" : "black";

        // Estiliza todos os botões com a classe 'buttonGeral'
        const botoes = document.querySelectorAll(".buttonGeral");
        botoes.forEach((botao) => {
        botao.style.border = opcao ? "10px solid white" : "10px solid black";
        botao.style.borderBottom = opcao ? "25px solid white" : "25px solid black";
        botao.style.backgroundColor = opcao ? "black" : "white";
        });

        const modo = opcao ? "Claro" : "Escuro";
        
    }
    else{
        document.body.style.backgroundColor = opcao ? "black" : "white";
        document.body.style.color = opcao ? "white" : "black";

        // Estiliza todos os botões com a classe 'buttonGeral'
        const botoes = document.querySelectorAll(".buttonGeral");
        botoes.forEach((botao) => {
        botao.style.border = opcao ? "10px solid white" : "10px solid black";
        botao.style.borderBottom = opcao ? "25px solid white" : "25px solid black";
        botao.style.backgroundColor = opcao ? "black" : "white";
        });

        const modo = opcao ? "Claro" : "Escuro";
       
    }

    return(
        <>
            {contente}
            <button id="modo" onClick={() => setOpcao(!opcao)}>Modo {modo}</button>
        </>
    )
}