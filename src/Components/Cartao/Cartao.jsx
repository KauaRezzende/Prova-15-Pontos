import React from 'react';


const Titulo = ({ titulo }) => {
    return <h2>{titulo}</h2>;
  };
  
 

export default function App() {
  return (
    <div>
      <Titulo titulo="Olá, este é o título!"/>
    </div>
  );


}