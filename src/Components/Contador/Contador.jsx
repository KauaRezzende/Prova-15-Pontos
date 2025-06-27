
'use client'
import { useState } from "react";


export default function Contador() {
    
  const [contador, setContador] = useState(0);
  function Aumentar(){
    setContador(contador +1)
  }
  
  return (
    <>
    <button onClick={Aumentar}>Adiconar</button>

    <p>O botão foi clicado {contador} vezes</p>
   </>
    
  );
}

