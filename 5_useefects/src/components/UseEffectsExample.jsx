import React, { useEffect, useState } from 'react'

const UseEffectsExample = () => {

    // sem Dependencias | sempre roda sozinho quando algo re-renderiza
    useEffect(() => {
        console.log("Rodou UE1");
    });

    // com dependencias vazias | só roda quando carrega a aplicacao, bom para carregar dados de API
    useEffect(() => {
        console.log("Rodou UE2");
    }, []);

    // com dependencias preenchidas | só roda quando determinada dependencia é alterada
    useEffect (() => {
        console.log("Rodou UE3");
    }, [count])

    // useState ativa a re-renderizacao
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}> aumenta a contagem</button>
        </div>
    )
};

export default UseEffectsExample
