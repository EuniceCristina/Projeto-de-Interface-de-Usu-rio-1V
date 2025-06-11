import {useState} from 'react'; // Aqui importamos o useState para mudar o valor do contador
export default function Contador(){ // Aqui criamos e exportamos a função para ser usado em outro componente
    /* A função useState, usada para armazenar uma mudança de valor, vai verificar quando houver um clique no botão, sendo setContador usado para registrar a modificação e contador, para armazenar o novo valor*/
    let [contador,setContador] = useState(0)
    


    return(
        <>
        <h1>Bem vindo ao contador</h1>
        {/* O primeiro botão contem um evento que aciona uma função sem nome, que opera decremento e registra no contador  através de setContador*/}

        <button onClick={() => setContador(contador-1)}  style={{backgroundColor : contador < 0 ? 'red' : 'lightblue'}}>-</button>

        {/* Aqui fica a informação que chegará ao usuário informando qual o valor do contador, usando aspas para puxar a variavel definida em javascript */}
        <p>{contador}</p>

        {/* Neste botão, a funcionalidade se assemelha ao de decremento, so que efetua a soma ao invés de subtração, fazendo o mesmo registro */}
        <button onClick={() => setContador(contador+1)} style={{backgroundColor : contador > 10 ? 'red' : 'lightblue'}}>+</button>

        {/* Fora os eventos, foram usados nos botões uma lógica de permite ver se o contador é maior que 10 ou negativo, caso verdadeiro, o botão fica vermelho, se não permanece azul. */}
        </>
    )
}