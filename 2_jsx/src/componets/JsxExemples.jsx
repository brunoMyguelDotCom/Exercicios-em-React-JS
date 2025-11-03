import React from 'react'

const JsxExemples = () => {

    // variavel JS
    const userName = "Bruno";

    // objeto JS
    const user = {
        name: "Mylena",
        lastName: "Greco",
    };

    // funcoes JS
    function getSaldacoes(name) {
        return `Olá ${name}`;
    }

    const isUserLoggedIn = false;

    const userRole = "admin"; 

    const users = [
        {id: 1, name: "Bruno"},
        {id: 2, name: "My"},
        {id: 3, name: "Tobias"},
    ]

    return (
        <div>
            <h2>Coneudo que o usuario vai ver</h2>

            {/* print de variavel */}
            <p>o nome do usuario é: {userName}</p>

            {/* print de variavel dentro de objeto */}
            <p>o nome do usuario dentro do objeto é: {user.name} {user.lastName}</p>

            {/* print dentro de funcao */}
            <p>funcao saldacao com USERNAME retorna: {getSaldacoes(userName)}</p>
            <p>funcao saldacao com nome vindo de objeto retorna: {getSaldacoes(user.name)}</p>
            <p>funcao saldacao com nome digitado retorna: {getSaldacoes("FAILEDMOSES")}</p>
            

            {/* DIFERENCAS DO HTML */}
            
            {/* Class vira CLASSNAME */}
            <div className="teste">div teste className</div>

            <button onClick={() => alert("ALERTA")}>CLICK ME</button>


            {/* REDENRIZACAO CONDICIONAL */}
            {isUserLoggedIn ? (<p>CASO LOGADO</p>) : (<p>CASO NAO LOGADO</p>)}

            <p>
                {userRole === "admin" && "BEM VINDO ADMIN"}
            </p>

            <div>
                <ul>
                    {users.map((user => (
                        <li key={user.id}>
                            {user.id} - {user.name}
                        </li>
                    )))}
                </ul>
            </div>
        </div>
    )
}

export default JsxExemples
