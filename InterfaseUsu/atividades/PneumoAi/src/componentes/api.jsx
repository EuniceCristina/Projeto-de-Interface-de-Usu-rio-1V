import React, { useState } from "react";
import axios from "axios";
import "./api.css";

export default function PneumoniaDiagnosisApp() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [diagnostico, setDiagnostico] = useState(null);
  const [probs, setProbs] = useState(null);

  const API_URL = "http://localhost:8000";

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setDiagnostico(null);
    setProbs(null);
  };

  const verificarStatus = async () => {
    try {
      const res = await axios.get(`${API_URL}/health`);
      setStatus(res.data.message);
    } catch (err) {
      setStatus("API offline ou inacessível.");
    }
  };

  const enviarDiagnostico = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${API_URL}/predict`, formData);
      setDiagnostico(res.data);
    } catch (err) {
      alert("Erro no diagnóstico.");
    }
  };

  const enviarProbas = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${API_URL}/predict/probas`, formData);
      setProbs(res.data);
    } catch (err) {
      alert("Erro ao obter probabilidades.");
    }
  };

  return (
    <div className="container">
      <h1>Diagnóstico de Pneumonia</h1>
      <button className="btn-check" onClick={verificarStatus}>Verificar API</button>
      <p className={status.includes("online") ? "status online" : "status offline"}>{status}</p>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      <div className="buttons">
        <button className="btn" onClick={enviarDiagnostico} disabled={!file}>Enviar para Diagnóstico</button>
        <button className="btn" onClick={enviarProbas} disabled={!file}>Obter Probabilidades</button>
      </div>

      {diagnostico && (
        <div className="resultado">
          <h2>Resultado</h2>
          <ul>
            <li><strong>Tipo da Imagem:</strong> {diagnostico.tipo_imagem}</li>
            <li><strong>Confiança Tipo:</strong> {diagnostico.confianca_tipo}</li>
            <li><strong>Diagnóstico:</strong> {diagnostico.diagnostico}</li>
            <li><strong>Tem Pneumonia:</strong> {diagnostico.tem_pneumonia ? "Sim" : "Não"}</li>
            <li><strong>Classe Predita:</strong> {diagnostico.classe_predita}</li>
            <li><strong>Confiança Predição:</strong> {diagnostico.confianca_pred}</li>
          </ul>
        </div>
      )}

      {probs && (
        <div className="resultado">
          <h2>Probabilidades</h2>
          <div>
            <strong>Tipo da Imagem:</strong>
            <ul>
              {Object.entries(probs.prob_tipo).map(([key, value]) => (
                <li key={key}>{key}: {value}</li>
              ))}
            </ul>
          </div>

          {probs.prob_pneumonia && (
            <div>
              <strong>Diagnóstico:</strong>
              <ul>
                {Object.entries(probs.prob_pneumonia).map(([key, value]) => (
                  <li key={key}>{key}: {value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 
