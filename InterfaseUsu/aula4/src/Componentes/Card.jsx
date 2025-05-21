import screen from "../assets/nature2.jpg"
export default function Card(){

    return(
        <div>
            <figure>
                <img src={screen} alt="Imagem" />
                <figcaption>Imagem da natureza</figcaption>
            </figure>
        </div>
    )
}