import './Card.css'
export default function Card(props){
    return (
        <>
        <div>
           
            <figure>
                <img src={props.imagem} alt="" />
                <figcaption>{props.nome}</figcaption>
            </figure>
        </div>
        </>
    )
}