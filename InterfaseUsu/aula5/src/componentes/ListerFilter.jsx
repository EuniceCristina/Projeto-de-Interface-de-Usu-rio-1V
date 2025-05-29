import {times} from './dados.js'
export default function ListerFilter(){

    const menordetodos = times.filter(time => time == 'Flamengo')

    return(
        <div>
            <ul>
            {menordetodos.map(
                menor => (
                    <li>{menor}</li>
                )
            )
            }
            </ul>
        </div>
    )
}