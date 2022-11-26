import { useState } from "react"
import palavras from "./palavras"

export default function CriarLayout({palavraEscondida, setPalavraEscondida,palavra,setPalavra}){
    
    function iniciar(){
        let novaPalavra = palavras[Math.floor(Math.random()*palavras.length)]
        setPalavra(novaPalavra)
        esconderPalavra(novaPalavra);
        }
        console.log(palavraEscondida)
    function esconderPalavra(word) {
        const palavraEscondida = word.split('').map(() => "_ ");
        setPalavraEscondida(palavraEscondida.join(''));    
    }

    return (
        <div className="layout">
            <div className="palavraEscolhida">{palavraEscondida} </div>
            <img className="madeira1" src="./assets/forca0.png" />
            <button onClick={iniciar} className="botaoPalavra"> Escolher Palavra</button>
        </div>
    )


}