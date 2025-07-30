import { useEffect } from "react";
export default function API(){
     const API = "http://localhost:8000/tarefas/"

     useEffect(() => {
        const enviarDados = async () => {
            const novoPost = {
                id : 3,
                descricao : 'Primeira tarefa',
                prioridade : 4,
                concluida : false
            };
        try {
        const response = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(novoPost)
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
        enviarDados()
     }, []);

     return(
    <h1>Envio de dados</h1>
)

}

