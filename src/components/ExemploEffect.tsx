import { useEffect, useState } from "react"

export default function ExemploEffect(){

    const [count, setCount] = useState(0)

    const[contagem, SetContagem] = useState(0)

    // É chamado sempre que há uma alteração no ciclo de vida.
    useEffect(()=>{
        console.log('Sempre sou chamado!')
    })

    // Só é chamado quando o componente é criado.
    useEffect(()=>{
        console.log('Só sou chamado quando o componente for criado.')
    },[])

    // Só é chamado quando o valor ou valores do array sofrem alteração
    useEffect(()=>{
        if(count != 0){
            console.log(`O valor de Count é: ${count}`)
        }
    },[count])


    //É chamado quando o componente é excluído
    useEffect(()=>{
        return()=>{
            console.log('Ops, me excluíram')
        }
    },[])





    return(
        <div>
            <h2>Exemplo Effect</h2>
            <p>Valor de Count: {count}</p>
            <button onClick={()=>setCount(count + 1)}>Aumentar</button>
            <p>Valor de Contagem: {contagem}</p>
            <button onClick={()=>SetContagem(contagem + 1)}>Aumentar Contagem</button>
        </div>
    )
}