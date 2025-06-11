import {carros} from "./dados_carros.js" //Importa as informações dos carros numa variavel carros
export default function Listagem(){ //Cria e exporta a função de Listagem

    const carros_vermelhos = carros.filter(carro => carro.cor =='vermelho') //Aplicação do filtro, que armazena na variavél carros_vermelhos os carros que a chave cor tem valor vermelho, usada na segunda lista da avaliação

    return(  //a parte em html a ser exportada
        <>
        <h1>Listagens</h1>
        <h2>Listagem de modelos</h2>
        <ol> {/* Aqui fica a lista de carros com os modelos e os anos */}
            {carros.map(carro => (
                <li key={carro.id}>Modelo : {carro.modelo} | ano: {carro.ano}</li>
            ))}
        </ol>

        <h2>Listagem dos vermelhos</h2>
        <ol>
             {/* Com a funcao map, separamos cada carro */}
             {/*o key é usado para informar qual carro esta em cada linha e cada carro separado usa a chave modelo e ano para pegar as respectivas informações */}
            {carros_vermelhos.map(vermelho => ( 
                <li key={vermelho.id}>{vermelho.modelo}</li>
            ))}
        </ol>
        </>
    )
}
