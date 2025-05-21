import "./EscopoReduz.css";

const EscopoReduz = () => {
    function handleClick() {
        alert("handleClick");
    }

    function mudarCor() {
        const elemento = document.getElementById('elemento');
        if (elemento) {
            elemento.style.backgroundColor = 'red'; // Corrigido: backgroundColor (não backgroundcolor)
        }
    }

    return (
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
                <button onClick={mudarCor}>Opa</button>
            </div>
        </>
    );
};

export default EscopoReduz;
