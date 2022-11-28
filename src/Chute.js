export default function Chutar({palavraEscondida, setPalavraEscondida,palavra,setPalavra,erros,setErros,desabilitarBotao,setDesabilitarBotao,setChute,chute,cor,setCor}){
    function chutarPalavra(){
        if(chute==palavra){
            setCor("green")
        }
        else{
            setErros(6)
            setDesabilitarBotao(true)
            setCor("red")
        }
    }
   
    return(
        <div className="layoutChutar" >
            Já sei a palavra! <input data-test="guess-input" onChange={event => setChute(event.target.value)} 
            disabled={desabilitarBotao} value={chute}
            className="inputChutar" /> <button data-test="guess-button" onClick={chutarPalavra} className="botaoChutar">Chutar</button>
        </div>
    )
}