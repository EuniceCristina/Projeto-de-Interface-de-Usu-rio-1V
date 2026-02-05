import {useState,useEfecct, use} from "react";
import "./form.css"
export default function Form(){

    const [email,setEmail] = useState('');
    const [valor,setValor] = useState('');

    const cores = ['green','blue']

    const handleSubimit = (e) => {
        e.preventDefault();
        if (valor === "1"){
            document.body.style.backgroundColor = "#008000";
        } else if (valor === "2"){
            document.body.style.backgroundColor = "blue";
        } else if (valor === "3"){
            document.body.style.backgroundColor = "pink";
        } else {
            document.body.style.backgroundColor = "yellow";
        }

        
    } 

    return(
        <>
        <form onSubmit={handleSubimit}>
            <h1>Prova do 2* bimestre</h1>
            <label htmlFor="email">Digite seu email</label>
            <input type="email" name="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="valor">Cores disponiveis</label>
            <select name="valor" id="" value={valor} onChange={(e) => setValor(e.target.value)}>
                <option value="1">Verde</option>
                <option value="2">Azul</option>
                <option value="3">Rosa</option>
                <option value="4">Amarelo</option>
            </select>
            <button>Enviar</button>
        </form>
        </>
    )

}