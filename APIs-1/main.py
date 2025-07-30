# pip install fastapi uvicorn pydantic
# pip freeze > requirements.txt
# uvicorn main:app --reload
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens (em desenvolvimento)
    allow_methods=["*"],  # Permite todos os métodos
    allow_headers=["*"],  # Permite todos os headers
)

# Modelo Pydantic
class Tarefa(BaseModel):
    id: int
    descricao: str
    prioridade: int
    concluida: bool

# Banco de dados em memória
tarefas: List[Tarefa] = [
    Tarefa(id=1, descricao="Estudar FastAPI", prioridade=1, concluida=False),
    Tarefa(id=2, descricao="Ler documentação", prioridade=2, concluida=True)
]

# Rotas
@app.get("/tarefas/", response_model=List[Tarefa])
def listar_tarefas():
    return tarefas

@app.get("/tarefas/{id}", response_model=Tarefa)
def listar_tarefa(id: int):
    for tarefa in tarefas:
        if tarefa.id == id:
            return tarefa
    raise HTTPException(status_code=404, detail="Tarefa não encontrada")

@app.post("/tarefas/", response_model=Tarefa)
def criar_tarefa(tarefa: Tarefa):
    tarefas.append(tarefa)
    return tarefa