import {useState} from "react";
export default function Logn(){

    const [usuario,setUsuario] = useState("")
    const [senha,setSenha] = useState("")

    const enviarDados = (e) =>{
        e.preventDefault();
        console.log(usuario,senha);

        setUsuario("");
        setSenha("");

    }

    

    return(
        <>
        <form onSubmit={enviarDados}>
            <input type="text" placeholder="Seu usuário"  value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha"/>
            <button>Enviar</button>
        </form>
        </>
    )
}