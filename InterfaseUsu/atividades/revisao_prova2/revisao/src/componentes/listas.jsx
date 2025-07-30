import {useState,useEffect} from "react";
export default function Listas(){

    const [usuarios,setUsuario] = useState([])

    useEffect(() => {
        const fecthUsuarios = async () => {
        
            const response = await fetch('https://jsonplaceholder.typicode.com/users/')
            const data = await response.json();
            setUsuario(data);
           
        }
        fecthUsuarios();
    },[])

    return(
        <>
        <div>
            <h1>Lista de users</h1>
            <ul>
                {usuarios.map(usuario =>
                    <li key={usuario.id}>{usuario.name}</li>
                )}
            </ul>
        </div>
        </>
    )
}