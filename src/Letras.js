import jogo from "./Jogo"
export default function Teclado({palavraEscondida, setPalavraEscondida,palavra,setPalavra,erros,setErros,desabilitarBotao,setDesabilitarBotao,clicado,setClicado}){
    const letrasAlfabeto = [
        {letra:"a"},{letra:"b"},{letra:"c"},{letra:"d"},{letra:"e"},{letra:"f"},
        {letra:"g"},{letra:"h"},{letra:"i"},{letra:"j"},{letra:"k"},{letra:"l"},
        {letra:"m"},{letra:"n"},{letra:"o"},{letra:"p"},{letra:"q"},{letra:"r"},
        {letra:"s"},{letra:"t"},{letra:"u"},{letra:"v"},{letra:"w"},{letra:"x"},
        {letra:"y"},{letra:"z"}
    ]
    
   
    function checar(letra){
    
        if (palavra.includes(letra)){
            console.log(letra)
            console.log(palavra)
            let revelarLetra = palavraEscondida.split(" ")
            for(let i=0; i<palavra.length;i++){
                console.log(palavra[i])
                if(palavra[i]==letra){
                    revelarLetra[i]=letra
                }   
            }
            console.log(revelarLetra)
            setPalavraEscondida(revelarLetra.join(" ")) 
        }
        else {
           erros = erros +1 
           setErros(erros)
        }
        if(erros === 6){
            alert("perdeu")
        }
    }
    return (
        (
            <div className="layoutLetras">
                {letrasAlfabeto.map((l) =>
                    <button 
                     disabled={ false } 
                     onClick={()=>checar(l.letra)} className="letras"> {l.letra}
                    </button>
                )}
            </div>
        )
    )
}