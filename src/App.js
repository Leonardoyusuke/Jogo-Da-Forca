import Jogo from "./Jogo"
import Letras from "./Letras"
import Chutar from "./Chute";
import palavras from "./palavras"
import { useState } from "react"

function App() {
  const [palavra,setPalavra] = useState("")
  const [palavraEscondida, setPalavraEscondida] = useState(" ")
  const [erros, setErros] = useState(0)
  const [desabilitarBotao, setDesabilitarBotao] = useState(true)
  const [clicado,setClicado] = useState([])
  const [chute, setChute] = useState("")
  const [cor,setCor]= useState("")
  const [palavraCerta,setPalavraCerta] = useState("")
  return (
    <div>
      <Jogo cor={cor} setCor={setCor} clicado={clicado} setClicado={setClicado} desabilitarBotao={desabilitarBotao} setDesabilitarBotao={setDesabilitarBotao} erros={erros} setErros={setErros} palavra={palavra} setPalavra={setPalavra} palavraEscondida={palavraEscondida} setPalavraEscondida={setPalavraEscondida} />
      <Letras palavraCerta={palavraCerta} setPalavraCerta={setPalavraCerta} setCor={setCor} cor={cor} clicado={clicado} setClicado={setClicado} desabilitarBotao={desabilitarBotao} setDesabilitarBotao={setDesabilitarBotao} erros={erros} setErros={setErros} palavra={palavra} setPalavra={setPalavra} palavraEscondida={palavraEscondida} setPalavraEscondida={setPalavraEscondida}  />
      <Chutar cor={cor} setCor={setCor} chute={chute} setChute={setChute} desabilitarBotao={desabilitarBotao} setDesabilitarBotao={setDesabilitarBotao} erros={erros} setErros={setErros} palavra={palavra} setPalavra={setPalavra} palavraEscondida={palavraEscondida} setPalavraEscondida={setPalavraEscondida} />
    </div>
  );
}

export default App;