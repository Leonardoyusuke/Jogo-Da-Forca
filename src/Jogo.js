import { useState } from "react"
import palavras from "./palavras"

export default function CriarLayout({palavraEscondida, setPalavraEscondida,palavra,setPalavra,erros,setErros,desabilitarBotao,setDesabilitarBotao, clicado, setClicado,cor,setCor}){
    
    function iniciar(){
        let novaPalavra = palavras[Math.floor(Math.random()*palavras.length)]
        setDesabilitarBotao(false)
        setPalavra(novaPalavra)
        esconderPalavra(novaPalavra);
        setClicado([]);
        }
        console.log(palavraEscondida)
    function esconderPalavra(word) {
        const palavraEscondida = word.split('').map(() => "_ ");
        setPalavraEscondida(palavraEscondida.join(''));    
    }

    return (
        <div className="layout">
            <div  className={`palavraEscolhida ${cor}`}>{palavraEscondida} </div>
            <img className="madeira1" src={`assets/forca${erros}.png`} />
            <button onClick={iniciar} className="botaoPalavra"> Escolher Palavra</button>
        </div>
    )


}