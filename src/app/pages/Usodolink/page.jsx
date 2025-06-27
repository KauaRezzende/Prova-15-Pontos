// O link é uma função utilizada para a navegação de paginas. Abaixo contem exemplos de como isso funciona e é aplicado


import Link from "next/link"; // Primeiro passo é importa a função Link

export default function links(){

    return(
        <>
        <Link href= "/" >Home</Link> // Abrindo a tag link e colocando um caminho você pode acessar a pagina hipotetica "Home" como no exemplo ao lado
        <Link href= "/">Sobre nós</Link> //Outro exemplo do uso da função Link onde o usuario poderar clicar e se transoportado para a pagina hipotetica "Sobre nos"
        </>
    )
}

