import { useState, useEffect } from 'react';
import './lista.css';

export default function Lista() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsuarios = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsuarios(data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error); 
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    if (loading) {
        return <p>Carregando informações dos usuários...</p>
    }

    return (
        <div>
            <h1>Lista dos usuários</h1>

            <h2>Lista de nomes</h2>
            <button onClick={fetchUsuarios}>Atualizar Nomes</button>
            <table id='nome'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Lista de usernames</h2>
            <button onClick={fetchUsuarios}>Atualizar Usernames</button>
            <table id='username'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>UserName</td>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Lista de cidades</h2>
            <button onClick={fetchUsuarios}>Atualizar Cidades</button>
            <table id='cidade'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Cidade</td>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
