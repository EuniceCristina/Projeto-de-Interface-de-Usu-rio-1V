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
                <button onClick={handleClick}>handleClick</button>

            </div>

            <div className="container" id="elemento" onClick={() => alert('Container')}>
                <p>Amou a tela?</p>
            </div>

            <div>
                 
                <button onClick={() => return {
                    const elemento = document.getElementById('elemento');
                    elemento.style.backgroundcolor = 'red';
                    }}>
                        Opa
                </button>
            </div>
        </>
    )
}

>>>>>>> 321e32a96ae4eb8115412e131b324ec3ed95ad48
export default EscopoReduz