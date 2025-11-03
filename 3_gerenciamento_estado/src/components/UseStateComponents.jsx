// useState = hooks

// funcionalidade especial para um fim especifico, gerenciar estados
import { useState } from 'react'

// sempre que é um valor dinamico -> useState
// sempre que é somente leitura -> variaveis
const UseStateComponents = () => {

    // cria variavel de consulta e seu set. Inicia o hook
    const [count, setCount] = useState(0);

    const increment = () => {

        setCount((prevCount) => prevCount + 1);
        console.log(count);
    };

    const [user, setUser] = useState({
        name: "My",
        age: 18,
        hobbies: ["Leitura", "arte"]
    });

    const updateUserAge = () => {
        setUser((prevUser) => (
            {
                ...prevUser,
                age: prevUser.age + 1
            }
        ));
    };

    return (
        <div>

            <h2>CONTADOR</h2>
            <p>Voce clicou {count} vezes</p>
            <button onClick={increment}>INCREMENTAR</button>

            <p>
                Nome: {user.name} e idade: {user.age}
            </p>

            <button onClick={updateUserAge}> Incrementar idade</button>
        </div>
    )
}

export default UseStateComponents
