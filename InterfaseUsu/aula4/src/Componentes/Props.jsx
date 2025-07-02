export default function Props(props){
    return (
        <>
        <div>
            <h2>Test props</h2>
            <p>O nome {props.name} foi enviado via props</p>
            <p>{props.newname}</p>
            <p>{props.atributo}</p>
            <p>{props.nome}</p>
            <p>{props.imagem}</p>
        </div>
        </>
    )
}