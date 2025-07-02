import { useState } from 'react';
import {times } from './dados'

export default function DropdownTimes() {
  const [timeSelecionado, setTimeSelecionado] = useState('');
  

  function handleChange(event) {
    setTimeSelecionado(event.target.value);
  }

  return (
    <div>
      <label htmlFor="times">Escolha seu time: </label>
      <select id="times" value={timeSelecionado} onChange={handleChange}>
        {times.map( time =>
            <option value={time}>{time}</option>
            )}
      </select>

      {timeSelecionado && (
        <p>Você selecionou: <strong>{timeSelecionado}</strong></p>
      )}
    </div>
  );
}