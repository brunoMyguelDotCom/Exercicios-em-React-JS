// eventos handle sao usados para que faca determinada funcao mas
// nao atualiza a pagina

import React, { useState } from 'react'
import { useInsertionEffect } from 'react';

const EventHandlingExample = () => {

    const handleClick = () => {
        alert("Testando uns negocio ai");
    };

    const handleCumprimento = (name) => {
        alert(`ola ${name}`);
    };

    // ler o valor do input
    const [name, setName] = useState("");

    // (e) é um parametro especial
    const handleSubmit = (e) => {
        e.preventDefault(); // preventDefault evita recarregar a pagina
        alert(`ENVIADO ${name}`);
    };

    return (
        <div>
            <button onClick={() => alert("oi")}> clique em mim</button>
            <button onClick={handleClick}> clique em mim</button>

            <br /> <br />

            <button onClick={() => handleCumprimento("Ana")}>Dizer ola Ana</button>
            <button onClick={() => handleCumprimento("Pedro")}>Dizer ola Pedro</button>

            <br /> <br />

            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Digite seu nome' />
                <input type="submit" value="enviar" />
            </form>

            <p>seu nome é: {name}</p>

        </div>
    )
}

export default EventHandlingExample
