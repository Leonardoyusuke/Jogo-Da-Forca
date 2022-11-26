import Jogo from "./Jogo"
import Letras from "./Letras"
import Chutar from "./Chute";
import palavras from "./palavras"
import { useState } from "react"

function App() {
  const [palavra,setPalavra] = useState("")
  const [palavraEscondida, setPalavraEscondida] = useState(" ")
  return (
    <div>
      <Jogo palavra={palavra} setPalavra={setPalavra} palavraEscondida={palavraEscondida} setPalavraEscondida={setPalavraEscondida}/>
      <Letras palavra={palavra} setPalavra={setPalavra} palavraEscondida={palavraEscondida} setPalavraEscondida={setPalavraEscondida}/>
      <Chutar/>
    </div>
  );
}

export default App;
