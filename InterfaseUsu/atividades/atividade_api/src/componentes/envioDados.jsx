import { useState } from "react";

export default function EnvioDados() {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [cidade, setCidade] = useState('');

  const API = "https://jsonplaceholder.typicode.com/users"; // Troque aqui pela sua própria API!

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o reload da página

    const novoUsuario = {
      name: name,
      username: username,
      address: {
        city: cidade
      }
    };

    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
      });

      const data = await response.json();
      console.log("Usuário enviado com sucesso:", data);
      alert("Usuário enviado com sucesso!");

      // Limpar formulário:
      setName('');
      setUserName('');
      setCidade('');
    } catch (error) {
      console.error("Erro ao enviar usuário:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Nome:</span>
        <input
          type="text"
          placeholder="Digite seu Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <br />
      <label>
        <span>Username:</span>
        <input
          type="text"
          placeholder="Digite seu Username"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
      </label>
      <br />
      <label>
        <span>Cidade:</span>
        <input
          type="text"
          placeholder="Digite sua Cidade"
          onChange={(e) => setCidade(e.target.value)}
          value={cidade}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
