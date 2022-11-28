import { useState } from "react"
import palavras from "./palavras"

export default function CriarLayout({palavraEscondida, setPalavraEscondida,palavra,setPalavra,erros,setErros,desabilitarBotao,setDesabilitarBotao, clicado, setClicado,cor,setCor}){
    let novaPalavra = palavras[Math.floor(Math.random()*palavras.length)]
    function iniciar(){
        
        setDesabilitarBotao(false)
        setPalavra(novaPalavra)
        esconderPalavra(novaPalavra)
        setErros(0)
        setCor("black")
        setClicado([]);
        }
        console.log(palavraEscondida)
    function esconderPalavra(word) {
        const palavraEscondida = word.split('').map(() => "_ ");
        setPalavraEscondida(palavraEscondida.join(''));    
    }

    return (
        <div className="layout">
            <div data-test="word" data-answer={novaPalavra} className={`palavraEscolhida ${cor}`}>{palavraEscondida} </div>
            <img data-test="game-image" className="madeira1" src={`assets/forca${erros}.png`} />
            <button  onClick={iniciar} data-test="choose-word" className="botaoPalavra"> Escolher Palavra</button>
        </div>
    )


}