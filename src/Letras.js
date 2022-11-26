export default function Teclado(){
    const letrasAlfabeto = [
        {letra:"a"},{letra:"b"},{letra:"c"},{letra:"d"},{letra:"e"},{letra:"f"},
        {letra:"g"},{letra:"h"},{letra:"i"},{letra:"j"},{letra:"k"},{letra:"l"},
        {letra:"m"},{letra:"n"},{letra:"o"},{letra:"p"},{letra:"q"},{letra:"r"},
        {letra:"s"},{letra:"t"},{letra:"u"},{letra:"v"},{letra:"w"},{letra:"x"},
        {letra:"y"},{letra:"z"}
    ]

    return (
        (
            <div className="layoutLetras">
                {letrasAlfabeto.map((l) =>
                    <button className="letras"> {l.letra}
                    </button>
                )}
            </div>
        )
    )
}