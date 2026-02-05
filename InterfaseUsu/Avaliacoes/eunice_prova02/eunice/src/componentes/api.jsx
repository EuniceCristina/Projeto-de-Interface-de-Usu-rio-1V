import {useState,useEffect} from "react";
import "./form.css"
export default function API(){

    const API = " https://jsonplaceholder.typicode.com/users";

    const [usuarios,setUsuarios] = useState([])
    const [numero,setNumero] = useState(0)
    const [user,setUser] = useState([])

    const obterUsuarios = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
          const data = await response.json(); 
          setUsuarios(data); 
        } catch (error) {
          console.error("Erro ao buscar usuários:", error);
        } 
      }
  

    useEffect(() => {
        obterUsuarios();
        
      }, [atualizarDados]); 

    //   eu tenho ciencia que ele so aparece na tela quando tira atualizarDados, mas a logica mais parecida que eu achei foi com ele 
      
      const buscarUsuario = (e) =>{
        e.preventDefault();
        const usuarioSelecionado = usuarios.filter(usuario => usuario.id == numero);
        setUser(usuarioSelecionado);
      }

      const atualizarDados = () =>{
        pass
      }




      

      return(
        <>
        <h1>Lista de ids usuários</h1>

        <ul>
            {usuarios.map(usuario => (
                <li key={usuario.id}>{usuario.id}</li>
            ))}
        </ul>

        <form onSubmit={buscarUsuario}>
            <label htmlFor="numero">
                Digite o id do usuario pesquisado
            </label>
            <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
           <button type="submit">Enviar</button>
        </form>

        <h2>Usuário selecionado</h2>
        <ul>
            <li>{user.id}</li>
            <li>{user.nome}</li>
            <li>{user.email}</li>
        </ul>
        
        <button onClick={() => atualizarDados}>Atualiza</button>
        
        </>
      )

      
    
}