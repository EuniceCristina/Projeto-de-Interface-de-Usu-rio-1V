import { useEffect } from "react";

export default function EnviarDados() {
  const API = "http://localhost:8000/tarefas/";

  useEffect(() => {
    const enviarDados = async () => {
      const novoPost = {
        id: 5,
        descricao: "Conteúdo do novo post",
        prioridade: 1,
        concluida: true,
      };

      try {
        const response = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(novoPost),
        });

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Resposta da API:", data);
      } catch (error) {
        console.error("Erro ao enviar dados:", error.message);
      }
    };

    enviarDados();
  }, []);

  return (
    <div>
      <p>Envio de dados</p>
    </div>
  );
}
