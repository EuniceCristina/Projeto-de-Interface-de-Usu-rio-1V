<<<<<<< HEAD
import "./EscopoReduz.css"

const EscopoReduz = () => {
    function handleClick(){
        return (
            alert("handleClick")
        )
    }
    return(
        <>
            <div>
                <button onClick={() => console.log("Você clicou!")}>
                Clique
            </button>
            </div>

            
            <div>
            <button onClick={() => alert("Você clicou!")}>Novo botão</button>
            </div>
            
            <div>
                <button id="elemento" onClick={handleClick}>handleClick</button>

            </div>

            <div className="container"  onClick={() => alert('Container')}>
                <p>Amou a tela?</p>
            </div>

            <div>
                 
            <button onClick={() => {
                const elemento = document.getElementById('elemento');
                if (elemento) {
                    if (elemento.style.backgroundColor == 'red'){
                        elemento.style.backgroundColor = 'blueviolet';
                    }
                    else{
                        elemento.style.backgroundColor = 'red';
                    }
    
            
                    
                }
                
            }}>
               Opa
            </button>
            </div>
        </>
    )
}

=======
import "./EscopoReduz.css"

const EscopoReduz = () => {
    function handleClick(){
        return (
            alert("handleClick")
        )
    }
    return(
        <>
            <div>
                <button onClick={() => console.log("Você clicou!")}>
                Clique
            </button>
            </div>

            
            <div>
            <button onClick={() => alert("Você clicou!")}>Novo botão</button>
            </div>
            
            <div>
                <button id="elemento" onClick={handleClick}>handleClick</button>

            </div>

            <div className="container"  onClick={() => alert('Container')}>
                <p>Amou a tela?</p>
            </div>

            <div>
                 
            <button onClick={() => {
                const elemento = document.getElementById('elemento');
                if (elemento) {
                    if (elemento.style.backgroundColor == 'red'){
                        elemento.style.backgroundColor = 'blueviolet';
                    }
                    else{
                        elemento.style.backgroundColor = 'red';
                    }
    
            
                    
                }
                
            }}>
               Opa
            </button>
            </div>
        </>
    )
}

>>>>>>> 77aebd45a7051206aa78fdb96d2349ff13482785
export default EscopoReduz