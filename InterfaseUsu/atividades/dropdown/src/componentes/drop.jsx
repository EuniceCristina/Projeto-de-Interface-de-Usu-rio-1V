import './drop.css'
import {useState} from 'react';
export default function Drop(){
    let [ver,setVer] = useState(false)


    function mudarMenu(){
       setVer(!ver)
    }
    

    return(
        <>
        <button onClick={mudarMenu}>Menu</button>
        <select name="drop" id="drop" size={3} style={{display : ver ? 'flex' : 'none'}}>

           
            <option value="1">Um</option>
            <option value="2">Dois</option>
            <option value="3">Tres</option>

           
        </select>
        
        </>
    )
}