import { useState } from "react"
export default function FisrtForm(){


    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [idade,setIdade] = useState('')

    const handleSubimit = (e) => {
        e.preventDefault();
        console.log(name,idade,email)

        setEmail('');
        setIdade('');
        setName('');
    } 

  


    return(
        <>
        <form onSubmit={handleSubimit}>
            <label>
                <span>Nome:</span>
                <input type="text" placeholder="Digite seu Nome" onChange={(e) => setName(e.target.value)} value={name}/>
        
            </label>
            <label >
                <span>Email:</span>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <label>
                <span>Idade:</span>
                <input type="number" placeholder="Digite sua idade" onChange={(e) => setIdade(e.target.value)} value={idade}/>
            </label>
            <input type="submit" />
        </form>

        <p>Sue nome é {name}</p>
        <p>Seu email é {email}</p>
        <p>Sua idade é {idade}</p>
        </>
    )
}